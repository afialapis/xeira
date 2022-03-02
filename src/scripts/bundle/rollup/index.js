const path = require('path')
const {rollupBuild} = require('./build')
const {rollupInput} = require('./inputs')
const {rollupOutputs} = require('./outputs')

async function rollupBundle(pkgPath, xeiraConfig) {
  const pkgJson = require(path.join(pkgPath, 'package.json'))

  const input = rollupInput(pkgPath, pkgJson)
  const outputs= rollupOutputs(pkgPath, pkgJson)

  await rollupBuild(input, outputs)    

}

module.exports = {rollupBundle}