const path = require('path')
const {rollupBuild} = require('./build')
const {rollupModulesForCjs} = require('./cjs')
const {rollupModulesForEsmNode} = require('./esm-node')
const {rollupModulesForEsm} = require('./esm-browser')
const {rollupModulesForUmd} = require('./umd')

async function rollupBundle(pkgPath, xeiraConfig) {
  const pkgJson = require(path.join(pkgPath, 'package.json'))

  const input = 'src/index.js'

  await rollupBuild(...rollupModulesForCjs(xeiraConfig, pkgPath, pkgJson, input))

  await rollupBuild(...rollupModulesForEsmNode(xeiraConfig, pkgPath, pkgJson, input))

  await rollupBuild(...rollupModulesForEsm(xeiraConfig, pkgPath, pkgJson, input))

  await rollupBuild(...rollupModulesForUmd(xeiraConfig, pkgPath, pkgJson, input))

}

module.exports = {rollupBundle}