import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
//import babel from '@rollup/plugin-swc'
import externals from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

import {rollupBanner} from './commons/banner.mjs'
import {getDynamicImportOptions} from './commons/dynImports.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = process.env?.NODE_ENV || 'production'

async function rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, bundleDeps= false) {
  const customBabelConfig= {
    exclude: /node_modules/,
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    
    // TODO
    //  context.isAnApp()
    //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
    //  : bundled
    
    babelHelpers: 'bundled',

    presets: [
      ["@babel/preset-env", { 
        bugfixes: true,
        loose: true 
      }],
      ... context.usesReact
        ? ['@babel/preset-react']
        : []
    ]
  }
  const mergedBabelConfig= await getBabelConfig(context, input, customBabelConfig)

  const inputOptions= {
    input,
    plugins: [
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel(mergedBabelConfig), 
      commonjs({
        esmExternals: true
      }),      
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      externals({
        packagePath: pkgJsonPath,
        deps: !bundleDeps,
        peerDeps: !bundleDeps
      }),
      nodeResolve({
        rootDir: context.pkgPath,
        exportConditions: ['node'],
      }),

      scss({
        extract: true,
        plugins: [
          autoprefixer()
        ],
        use: {
          sass: {
            silenceDeprecations: ['legacy-js-api'],
          }
        }        
      })
    ],
    onwarn : (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY')    return;
      console.warn(warning.message)
    }
  }

  const outputFile = context.pkgp(
    bundleDeps ?  context.getEsmNodeFullBundleOutput() : context.getEsmNodeOutput()
  )

  const outputs= [
    {
      ...getDynamicImportOptions (context, outputFile),
      format: 'esm',
      exports: 'named',
      banner: rollupBanner(pkgJson)
    }
  ]

  return[inputOptions, outputs]
}

export {
  rollupModulesForEsmNode
}
