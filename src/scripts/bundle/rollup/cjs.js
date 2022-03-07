const path = require('path')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const {rollupBanner} = require('./banner')

function rollupModulesForCjs(xeiraConfig, pkgPath, pkgJson, input) {
  const main_file = path.join(pkgPath, pkgJson.main)

  const inputOptions= {
    input,
    plugins: [
      nodeResolve(),
      commonjs(),]
  }

  const outputs= [
    {
      file: main_file,
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