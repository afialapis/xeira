import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import {externals} from 'rollup-plugin-node-externals'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import polyfillNode from 'rollup-plugin-polyfill-node'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

import {rollupBanner} from './commons/banner.mjs'
import {getDynamicImportOptions} from './commons/dynImports.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = process.env?.NODE_ENV || 'production'

async function rollupModulesForEsm(context, pkgJsonPath, pkgJson, input) {
  const customBabelConfig= {
    exclude: 'node_modules/**',
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    
    // TODO
    //  context.isAnApp()
    //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
    //  : bundled
    
    babelHelpers: 'bundled',

    presets: [
      [ "@babel/preset-modules",
        {
          // Don't spoof `.name` for Arrow Functions, which breaks when minified anyway.
          loose: true,
        },
      ],
      ... context.usesReact
        ? [ "@babel/preset-react"
            //{
            //  // Compile JSX Spread to Object.assign(), which is reliable in ESM browsers.
            //  //useBuiltIns: true,
            //},
          ]
        : [],
    ]
  }

  const mergedBabelConfig = await getBabelConfig(context, input, customBabelConfig)

  const polyfill = context.polyfillNode
    ? [polyfillNode()]
    : []

  
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
      ...polyfill,
      externals({
        packagePath: pkgJsonPath
      }),
      nodeResolve({
        rootDir: context.pkgPath,
        exportConditions: ['node'],
      }),

      scss({
        extract: true
      })
    ]
  }

  const outputFile = context.pkgp(context.getEsmOutput(false))
  const outputFileMin = context.pkgp(context.getEsmOutput(true))

  const outputDef= {
    ...getDynamicImportOptions (context, outputFile),
    format: 'es',
    exports: 'named',
    banner: rollupBanner(pkgJson),
    sourcemap: true
  }
  const outputDefMin = {
    ...getDynamicImportOptions (context, outputFileMin),
    format: 'es',
    exports: 'named',
    banner: rollupBanner(pkgJson),
    plugins: [
      terser({ ecma: 8, safari10: true })
    ]
  }

  const outputs= 
    NODE_ENV === 'production'
    ? [outputDef, outputDefMin]
    : [outputDef]
  
  return[inputOptions, outputs]
}


export {
  rollupModulesForEsm
}