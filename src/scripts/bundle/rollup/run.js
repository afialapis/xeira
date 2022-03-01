const path = require('path')
const {readFile} = require('fs/promises')
const {rollupBuild} = require('./build')
const {rollupInput} = require('./inputs')
const {rollupOutputs} = require('./outputs')

async function rollup_bundle(pkgPath, xeiraConfig) {
  const pkgJson = await readFile(path.join(pkgPath, 'package.json'))

  const input = rollupInput(pkgPath, pkgJson)
  const outputs= rollupOutputs(pkgPath, pkgJson)

  await rollupBuild(input, outputs)    

}

module.exports = {rollup_bundle}