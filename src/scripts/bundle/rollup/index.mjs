import path from 'path'
import {rollupBuild} from './build.mjs'
import {rollupModulesForCjs} from './cjs.mjs'
import {rollupModulesForEsmNode} from './esm-node.mjs'
import {rollupModulesForEsm} from './esm-browser.mjs'
import {rollupModulesForUmd} from './umd.mjs'
import {rollupModulesForIife} from './iife.mjs'
import {makeMainFile} from './main_index.mjs'
import {readJsonFile} from '../../../utils/json.mjs'

async function rollupBundle(context) {
  const pkgp = (p) => p!=undefined ? path.join(context.pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = await readJsonFile(pkgJsonPath)

  const input = pkgp(context.sourceIndex)

  const cjs_output = pkgp(context.getCjsOutput(pkgJson.name))
  const esm_output = pkgp(context.getEsmOutput(pkgJson.name))
  const esm_node_output = pkgp(context.getEsmNodeOutput(pkgJson.name))
  const umd_output = pkgp(context.getUmdOutput(pkgJson.name))
  const umd_bundle_output = pkgp(context.getUmdFullBundleOutput(pkgJson.name))
  const iife_output = pkgp(context.getIifeOutput(pkgJson.name))
  const iife_bundle_output = pkgp(context.getIifeFullBundleOutput(pkgJson.name))

  const [main_file_suffix, main_file] = context.getMainFile(pkgJson.name) 

  if (cjs_output) {
    const [inputOptions, outputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input, cjs_output)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }

  if (esm_output) {
    const [inputOptions, outputs] = await rollupModulesForEsm(context, pkgJsonPath, pkgJson, input, esm_output)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }

  if (esm_node_output) {
    const [inputOptions, outputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, esm_node_output)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }
  
  if (umd_output) {
    const [inputOptions, outputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, umd_output, false)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }

  if (umd_bundle_output) {
    const [inputOptions, outputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, umd_bundle_output, true)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }  

  if (iife_output) {
    const [inputOptions, outputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, iife_output, false)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }

  if (iife_bundle_output) {
    const [inputOptions, outputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, iife_bundle_output, true)
    await rollupBuild(context.pkgPath, inputOptions, outputs)
  }  

  if (main_file_suffix) {
    await makeMainFile (pkgJson.name, main_file_suffix, pkgp(main_file))
  }

}


async function rollupBundleForNollup(pkgPath, context) {
  const pkgp = (p) => p!=undefined ? path.join(pkgPath, p) : undefined

  const pkgJsonPath = pkgp('package.json')

  const pkgJson = await readJsonFile(pkgJsonPath)

  const input = pkgp(context.sourceIndex)

  const demo_output= pkgp(`demo/${pkgJson.name}.bundle.js`)

  const [inputOptions, outputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, demo_output, true)
  await rollupBuild(context.pkgPath, inputOptions, outputs)

}


export {rollupBundle, rollupBundleForNollup}