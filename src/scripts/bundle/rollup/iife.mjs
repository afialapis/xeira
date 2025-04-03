import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
//import babel from '@rollup/plugin-swc'
import externals from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import polyfillNode from 'rollup-plugin-polyfill-node'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import terser from '@rollup/plugin-terser'

import {rollupBanner} from './commons/banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { toTitleCase, makeGlobals } from '../../../utils/names.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = process.env?.NODE_ENV || 'production'

async function rollupModulesForIife(context, pkgJsonPath, pkgJson, input, bundleDeps= false, bundleMin= 2) {

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
    ]
  }

  const outputFile = context.pkgp(
    bundleDeps ?  context.getIifeFullBundleOutput(false) : context.getIifeOutput(false)
  )
  const outputFileMin = context.pkgp(
    bundleDeps ?  context.getIifeFullBundleOutput(true) : context.getIifeOutput(true)
  )
  

  const outputDef= {
    file: outputFile,
    inlineDynamicImports: true,
    format: 'iife',
    exports: 'named',
    banner: rollupBanner(pkgJson),
    sourcemap: true,
    name: toTitleCase(pkgJson.name),
    globals: makeGlobals(pkgJson)
  }
  const outputDefMin= {
    file: outputFileMin,
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
  
  const outputs= 
    bundleMin == 2
    ? [outputDef, outputDefMin]
    : bundleMin == 1
      ? [outputDefMin]
      : [outputDef]
    



  return[inputOptions, outputs]
}


export {
  rollupModulesForIife
}