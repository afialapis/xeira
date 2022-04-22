const path = require('path')
const {rollupBuild} = require('./build')
const {rollupModulesForCjs} = require('./cjs')
const {rollupModulesForEsmNode} = require('./esm-node')
const {rollupModulesForEsm} = require('./esm-browser')
const {rollupModulesForUmd} = require('./umd')
const {makeMainFile} = require('./main_index')

async function rollupBundle(pkgPath, xeiraConfig) {
  const pkgp = (p) => p!=undefined ? path.join(pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = require(pkgJsonPath)

  const input = pkgp(xeiraConfig.sourceIndex)

  const cjs_output = pkgp(xeiraConfig.getCjsOutput(pkgJson.name))
  const esm_output = pkgp(xeiraConfig.getEsmOutput(pkgJson.name))
  const esm_node_output = pkgp(xeiraConfig.getEsmNodeOutput(pkgJson.name))
  const umd_output = pkgp(xeiraConfig.getUmdOutput(pkgJson.name))
  const umd_bundle_output = pkgp(xeiraConfig.getUmdFullBundleOutput(pkgJson.name))

  const node_main = pkgp(xeiraConfig.getMainFileForNode(pkgJson.name))

  if (cjs_output) {
    await rollupBuild(...rollupModulesForCjs(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, cjs_output))
  }

  if (esm_output) {
    await rollupBuild(...rollupModulesForEsm(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, esm_output))
  }

  if (esm_node_output) {
    await rollupBuild(...rollupModulesForEsmNode(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, esm_node_output))
  }
  
  if (umd_output) {
    await rollupBuild(...rollupModulesForUmd(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, umd_output, false))
  }

  if (umd_bundle_output) {
    await rollupBuild(...rollupModulesForUmd(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, umd_bundle_output, true))
  }  

  if (node_main) {
    const suffix = xeiraConfig.getMainFileForNodeSuffix()
    await makeMainFile (pkgJson.name, suffix, node_main)
  }

}

module.exports = {rollupBundle}