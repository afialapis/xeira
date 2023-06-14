import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import {externals} from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import polyfillNode from 'rollup-plugin-polyfill-node'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

import {rollupBanner} from './commons/banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { toTitleCase, makeGlobals } from '../../../utils/names.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = 'production'


async function rollupModulesForIife(context, pkgJsonPath, pkgJson, input, bundleDeps= false) {

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

  const polyfill = context.polyfillNode
    ? [polyfillNode()]
    : []

  const inputOptions= {
    input,
    plugins: [
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      babel(mergedBabelConfig),      
      externals({
        packagePath: pkgJsonPath,
        deps: !bundleDeps,
        peerDeps: !bundleDeps
      }),
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      nodeResolve({
        rootDir: context.pkgPath,
        exportConditions: ['node'],
      }),
      ...polyfill,
      commonjs({
        esmExternals: true
      }),
      scss()
    ]
  }

  const output = context.pkgp(
    bundleDeps ?  context.getIifeFullBundleOutput(false) : context.getIifeOutput(false)
  )
  const outputMin = context.pkgp(
    bundleDeps ?  context.getIifeFullBundleOutput(true) : context.getIifeOutput(true)
  )
  

  const outputs= [
    {
      file: output,
      inlineDynamicImports: true,
      format: 'iife',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      sourcemap: true,
      name: toTitleCase(pkgJson.name),
      globals: makeGlobals(pkgJson)
    },
    {
      file: outputMin,
      inlineDynamicImports: true,
      format: 'iife',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      plugins: [
        terser({ ecma: 8, safari10: true })
      ],
      name: toTitleCase(pkgJson.name),
      globals: makeGlobals(pkgJson)
    }    
  ]

  return[inputOptions, outputs]
}


export {
  rollupModulesForIife
}