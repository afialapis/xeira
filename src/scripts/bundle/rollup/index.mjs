import path from 'path'
import {rollupBuild} from './build.mjs'
import {rollupModulesForCjs} from './cjs.mjs'
import {rollupModulesForEsmNode} from './esm-node.mjs'
import {rollupModulesForEsm} from './esm-browser.mjs'
import {rollupModulesForUmd} from './umd.mjs'
import {rollupModulesForIife} from './iife.mjs'
import {makeMainFile} from './main_index.mjs'
import {readJsonFile} from '../../../utils/json.mjs'

async function rollupBundle(pkgPath, xeiraConfig) {
  const pkgp = (p) => p!=undefined ? path.join(pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = await readJsonFile(pkgJsonPath)

  const input = pkgp(xeiraConfig.sourceIndex)

  const cjs_output = pkgp(xeiraConfig.getCjsOutput(pkgJson.name))
  const esm_output = pkgp(xeiraConfig.getEsmOutput(pkgJson.name))
  const esm_node_output = pkgp(xeiraConfig.getEsmNodeOutput(pkgJson.name))
  const umd_output = pkgp(xeiraConfig.getUmdOutput(pkgJson.name))
  const umd_bundle_output = pkgp(xeiraConfig.getUmdFullBundleOutput(pkgJson.name))
  const iife_output = pkgp(xeiraConfig.getIifeOutput(pkgJson.name))
  const iife_bundle_output = pkgp(xeiraConfig.getIifeFullBundleOutput(pkgJson.name))

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

  if (iife_output) {
    await rollupBuild(...rollupModulesForIife(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, iife_output, false))
  }

  if (iife_bundle_output) {
    await rollupBuild(...rollupModulesForIife(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, iife_bundle_output, true))
  }  


  if (node_main) {
    const suffix = xeiraConfig.getMainFileForNodeSuffix()
    await makeMainFile (pkgJson.name, suffix, node_main)
  }

}


async function rollupBundleForNollup(pkgPath, xeiraConfig) {
  const pkgp = (p) => p!=undefined ? path.join(pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = await readJsonFile(pkgJsonPath)

  const input = pkgp(xeiraConfig.sourceIndex)

  const demo_output= pkgp(`demo/${pkgJson.name}.bundle.js`)


  await rollupBuild(...rollupModulesForIife(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, demo_output, true))

}


export {rollupBundle, rollupBundleForNollup}