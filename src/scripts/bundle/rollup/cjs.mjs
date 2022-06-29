import {externals} from 'rollup-plugin-node-externals'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import {rollupBanner} from './banner.mjs'

function rollupModulesForCjs(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, output) {
  const inputOptions= {
    input,
    plugins: [
      externals({
        packagePath: pkgJsonPath
      }),
      nodeResolve({
        rootDir: pkgPath,
        exportConditions: ['node'],
      }),
      commonjs({
        esmExternals: true
      })
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