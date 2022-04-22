const {externals} = require('rollup-plugin-node-externals')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {rollupBanner} = require('./banner')

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


module.exports= {
  rollupModulesForCjs
}