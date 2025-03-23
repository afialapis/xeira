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
  
  const NODE_ENV = process.env?.NODE_ENV || 'production'
  const bundleMin = (context.bundleAll() && NODE_ENV === 'production') 
    ? 2
    : context.bundleThis('min')
      ? 1
      : 0
  
  const bundleNormal = context.bundleAll() || !context.bundleThis('bundle')
  const bundleDeps = context.bundleAll() || context.bundleThis('bundle')

  // CJS - If Node
  if (context.isTargetingNode) {

    if (context.bundleThis('cjs')) {
      if (bundleNormal) {
        const [csjInputOptions, cjsOutputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input, false)
        await rollupBuild(context.pkgPath, csjInputOptions, cjsOutputs)
      }
      if (bundleDeps) {
        const [csjInputOptions, cjsOutputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input, true)
        await rollupBuild(context.pkgPath, csjInputOptions, cjsOutputs)
      }
    }
  }
  
  // ESM - Always
  if (context.bundleThis('mjs')) {
    const [esmInputOptions, esmOutputs] = await rollupModulesForEsm(context, pkgJsonPath, pkgJson, input, bundleMin)
    await rollupBuild(context.pkgPath, esmInputOptions, esmOutputs)
  }

  // ESM node special
  if (context.isTargetingNode) {
    if (context.bundleThis('mjs')) {
      if (bundleNormal) {
        const [esmnInputOptions, esmnOutputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, false)
        await rollupBuild(context.pkgPath, esmnInputOptions, esmnOutputs)
      }
      if (bundleDeps) {
        const [esmnInputOptions, esmnOutputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, true)
        await rollupBuild(context.pkgPath, esmnInputOptions, esmnOutputs)
      }
    }
  }

  // UMD and IIFE - If Browser
  if (context.isTargetingBrowser) {
    if (context.bundleThis('umd')) {
      if (bundleNormal) {
        const [umdInputOptions, umdOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, false, bundleMin)
        await rollupBuild(context.pkgPath, umdInputOptions, umdOutputs)
      }
      
      if (bundleDeps) {
        const [umdbInputOptions, umdbOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, true, bundleMin)
        await rollupBuild(context.pkgPath, umdbInputOptions, umdbOutputs)
      }
    }

    if (context.bundleThis('iife')) {
      if (bundleNormal) {
        const [iifeInputOptions, iifeOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, false, bundleMin)
        await rollupBuild(context.pkgPath, iifeInputOptions, iifeOutputs)
      }
      
      if (bundleDeps) {
        const [iifebInputOptions, iifebOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, true, bundleMin)
        await rollupBuild(context.pkgPath, iifebInputOptions, iifebOutputs)
      }
    }
  }  
  
  // Main file
  const [main_file_suffix, main_file] = context.getMainFile(pkgJson.name) 
  if (main_file_suffix) {
    if (context.bundleThis(main_file_suffix)) {
      await makeMainFile (pkgJson.name, main_file_suffix, pkgp(main_file))
    }
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