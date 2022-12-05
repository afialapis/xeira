import {externals} from 'rollup-plugin-node-externals'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import {babel} from '@rollup/plugin-babel'
import scss from 'rollup-plugin-postcss'
import {rollupBanner} from './banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'

function rollupModulesForCjs(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, output) {

  const inputOptions= {
    input,
    plugins: [
      ...getRollupPluginForResolvingAliases(pkgPath),
      babel({
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
      }),

      externals({
        packagePath: pkgJsonPath
      }),
      nodeResolve({
        rootDir: pkgPath,
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