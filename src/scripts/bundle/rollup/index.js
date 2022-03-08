const path = require('path')
const {rollupBuild} = require('./build')
const {rollupModulesForCjs} = require('./cjs')
const {rollupModulesForEsmNode} = require('./esm-node')
const {rollupModulesForEsm} = require('./esm-browser')
const {rollupModulesForUmd} = require('./umd')
const {makeMainFile} = require('./main_index')

async function rollupBundle(pkgPath, xeiraConfig) {
  const pkgp = (p) => path.join(pkgPath, p)

  const pkgJson = require(pkgp('package.json'))

  const input = xeiraConfig.sourceIndex

  const cjs_output = pkgp(xeiraConfig.getCjsOutput(pkgJson.name))
  const esm_output = pkgp(xeiraConfig.getEsmOutput(pkgJson.name))
  const esm_node_output = pkgp(xeiraConfig.getEsmNodeOutput(pkgJson.name))
  const umd_output = pkgp(xeiraConfig.getUmdOutput(pkgJson.name))
  const node_main = pkgp(xeiraConfig.getMainFileForNode(pkgJson.name))

  if (cjs_output) {
    await rollupBuild(...rollupModulesForCjs(xeiraConfig, pkgJson, input, cjs_output))
  }

  if (esm_node_output) {
    await rollupBuild(...rollupModulesForEsmNode(xeiraConfig, pkgJson, input, esm_output))
  }

  if (esm_output) {
    await rollupBuild(...rollupModulesForEsm(xeiraConfig, pkgJson, input, esm_output))
  }

  if (umd_output) {
    await rollupBuild(...rollupModulesForUmd(xeiraConfig, pkgJson, input, umd_output))
  }

  if (node_main) {
    const suffix = xeiraConfig.getMainFileForNodeSuffix()
    await makeMainFile (pkgJson.name, suffix, node_main)
  }

}

module.exports = {rollupBundle}