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


  // CJS - If Node
  if (context.isTargetingNode) {
    const [csjInputOptions, cjsOutputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input)
    await rollupBuild(context.pkgPath, csjInputOptions, cjsOutputs)
  }
  
  // ESM - Always
  const [esmInputOptions, esmOutputs] = await rollupModulesForEsm(context, pkgJsonPath, pkgJson, input)
  await rollupBuild(context.pkgPath, esmInputOptions, esmOutputs)

  // ESM node special
  if (context.isTargetingNode) {
    const [esmnInputOptions, esmnOutputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input)
    await rollupBuild(context.pkgPath, esmnInputOptions, esmnOutputs)
  }

  // UMD and IIFE - If Browser
  if (context.isTargetingBrowser) {
    const [umdInputOptions, umdOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, false)
    await rollupBuild(context.pkgPath, umdInputOptions, umdOutputs)
    
    const [umdbInputOptions, umdbOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, true)
    await rollupBuild(context.pkgPath, umdbInputOptions, umdbOutputs)
    
    const [iifeInputOptions, iifeOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, false)
    await rollupBuild(context.pkgPath, iifeInputOptions, iifeOutputs)
    
    const [iifebInputOptions, iifebOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, true)
    await rollupBuild(context.pkgPath, iifebInputOptions, iifebOutputs)
  }  
  
  // Main file
  const [main_file_suffix, main_file] = context.getMainFile(pkgJson.name) 
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