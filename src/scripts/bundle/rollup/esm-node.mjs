import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import {externals} from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'

import {rollupBanner} from './banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = 'production'

async function rollupModulesForEsmNode(xeiraConfig, pkgJsonPath, pkgJson, input, output) {
  const customBabelConfig= {
    exclude: /node_modules/,
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    
    // TODO
    //  xeiraConfig.isAnApp()
    //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
    //  : bundled
    
    babelHelpers: 'bundled',

    presets: [
      ["@babel/preset-env", { 
        bugfixes: true,
        loose: true 
      }],
      ... xeiraConfig.usesReact
        ? ['@babel/preset-react']
        : []
    ]
  }
  const mergedBabelConfig= await getBabelConfig(xeiraConfig, input, customBabelConfig)

  const inputOptions= {
    input,
    plugins: [
      ...getRollupPluginForResolvingAliases(xeiraConfig.pkgPath),
      json(),
      babel(mergedBabelConfig),
      externals({
        packagePath: pkgJsonPath
      }),
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      nodeResolve({
        rootDir: xeiraConfig.pkgPath,
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
