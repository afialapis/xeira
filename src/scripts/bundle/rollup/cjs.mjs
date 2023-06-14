import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import {externals} from 'rollup-plugin-node-externals'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'

import {rollupBanner} from './commons/banner.mjs'
import {getDynamicImportOptions} from './commons/dynImports.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

async function rollupModulesForCjs(context, pkgJsonPath, pkgJson, input) {

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
    ],
    
    plugins: [
      "babel-plugin-transform-import-meta"
    ]

  }

  const mergedBabelConfig= await getBabelConfig(context, input, customBabelConfig)

  const inputOptions= {
    input,
    plugins: [
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      babel(mergedBabelConfig),
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

  const output = context.pkgp(context.getCjsOutput())
  
  const outputs= [
    {
      ...getDynamicImportOptions (context, output),
      format: 'cjs',
      exports: 'named',
      banner: rollupBanner(pkgJson)
    }
  ]

  return [inputOptions, outputs]
}


export {
  rollupModulesForCjs
}