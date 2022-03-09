const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const {rollupBanner} = require('./banner')

function rollupModulesForCjs(xeiraConfig, pkgJson, input, output) {
  const inputOptions= {
    input,
    plugins: [
      nodeResolve(),
      commonjs()
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

  return[inputOptions, outputs]
}


module.exports= {
  rollupModulesForCjs
}