import path from 'path'
import {rollupBuild} from './build.mjs'
import {rollupModulesForCjs} from './cjs.mjs'
import {rollupModulesForEsmNode} from './esm-node.mjs'
import {rollupModulesForEsm} from './esm-browser.mjs'
import {rollupModulesForUmd} from './umd.mjs'
import {rollupModulesForIife} from './iife.mjs'
import {makeMainFile} from './main_index.mjs'
import {readJsonFile} from '../../../utils/json.mjs'

async function rollupBundle(xeiraConfig) {
  const pkgp = (p) => p!=undefined ? path.join(xeiraConfig.pkgPath, p) : undefined

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

  const [main_file_suffix, main_file] = xeiraConfig.getMainFile(pkgJson.name) 

  if (cjs_output) {
    const [inputOptions, outputs] = await rollupModulesForCjs(xeiraConfig, pkgJsonPath, pkgJson, input, cjs_output)
    await rollupBuild(inputOptions, outputs)
  }

  if (esm_output) {
    const [inputOptions, outputs] = await rollupModulesForEsm(xeiraConfig, pkgJsonPath, pkgJson, input, esm_output)
    await rollupBuild(inputOptions, outputs)
  }

  if (esm_node_output) {
    const [inputOptions, outputs] = await rollupModulesForEsmNode(xeiraConfig, pkgJsonPath, pkgJson, input, esm_node_output)
    await rollupBuild(inputOptions, outputs)
  }
  
  if (umd_output) {
    const [inputOptions, outputs] = await rollupModulesForUmd(xeiraConfig, pkgJsonPath, pkgJson, input, umd_output, false)
    await rollupBuild(inputOptions, outputs)
  }

  if (umd_bundle_output) {
    const [inputOptions, outputs] = await rollupModulesForUmd(xeiraConfig, pkgJsonPath, pkgJson, input, umd_bundle_output, true)
    await rollupBuild(inputOptions, outputs)
  }  

  if (iife_output) {
    const [inputOptions, outputs] = await rollupModulesForIife(xeiraConfig, pkgJsonPath, pkgJson, input, iife_output, false)
    await rollupBuild(inputOptions, outputs)
  }

  if (iife_bundle_output) {
    const [inputOptions, outputs] = await rollupModulesForIife(xeiraConfig, pkgJsonPath, pkgJson, input, iife_bundle_output, true)
    await rollupBuild(inputOptions, outputs)
  }  

  if (main_file_suffix) {
    await makeMainFile (pkgJson.name, main_file_suffix, pkgp(main_file))
  }

}


async function rollupBundleForNollup(pkgPath, xeiraConfig) {
  const pkgp = (p) => p!=undefined ? path.join(pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = await readJsonFile(pkgJsonPath)

  const input = pkgp(xeiraConfig.sourceIndex)

  const demo_output= pkgp(`demo/${pkgJson.name}.bundle.js`)

  const [inputOptions, outputs] = await rollupModulesForIife(xeiraConfig, pkgJsonPath, pkgJson, input, demo_output, true)
  await rollupBuild(inputOptions, outputs)

}


export {rollupBundle, rollupBundleForNollup}