import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import {externals} from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

import {rollupBanner} from './banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'

const NODE_ENV = 'production'

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

function toTitleCase(str) {
  let s= str.replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  s= s.charAt(0).toLowerCase() + s.substr(1);
  s= s.replace(/-/g,'')
  return s
}

const makeGlobals = (pkgJson) => {
  const pkgs= Object.keys(pkgJson.dependencies)
  const globals= {}
  pkgs.map((n) => {
    globals[n]= toTitleCase(n)
  })
  return globals
}

async function rollupModulesForIife(xeiraConfig, pkgJsonPath, pkgJson, input, output, bundleDeps= false) {

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
      format: 'iife',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      sourcemap: true,
      name: toTitleCase(pkgJson.name),
      globals: makeGlobals(pkgJson)      
    },
    {
      file: minifyExtension(output),
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