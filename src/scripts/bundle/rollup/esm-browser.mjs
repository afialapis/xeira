import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import {externals} from 'rollup-plugin-node-externals'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

import {rollupBanner} from './banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = 'production'

const minifyExtension = pathToFile => pathToFile.replace(/\.mjs$/, '.min.mjs');

async function rollupModulesForEsm(context, pkgJsonPath, pkgJson, input, output) {
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
  
  const inputOptions= {
    input,
    plugins: [
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      babel(mergedBabelConfig),      
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      externals({
        packagePath: pkgJsonPath
      }),
      nodeResolve({
        rootDir: context.pkgPath,
        exportConditions: ['node'],
      }),
      commonjs({
        esmExternals: true
      }),
      scss()
    ]
  }

  const outputs= [
    {
      file: output,
      format: 'es',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      sourcemap: true,
      inlineDynamicImports: true
    },
    {
      file: minifyExtension(output),
      format: 'es',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      plugins: [
        terser({ ecma: 8, safari10: true })
      ],
      inlineDynamicImports: true
    }    
  ]

  return[inputOptions, outputs]
}


export {
  rollupModulesForEsm
}