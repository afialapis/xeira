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

  const watch = context?.options?.watch

  // CJS - If Node
  if (context.isTargetingNode) {
    if (context.bundleIt('cjs')) {
      if (context.bundleWithoutDeps('cjs')) {
        const [csjInputOptions, cjsOutputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input, false)
        await rollupBuild(context.pkgPath, csjInputOptions, cjsOutputs, watch)
      }
      if (context.bundleWithDeps('cjs')) {
        const [csjInputOptions, cjsOutputs] = await rollupModulesForCjs(context, pkgJsonPath, pkgJson, input, true)
        await rollupBuild(context.pkgPath, csjInputOptions, cjsOutputs, watch)
      }
    }
  }
  
  // ESM
  if (context.bundleIt('mjs')) {
    // ESM Node
    if (context.isTargetingNode) {
      if (context.bundleWithoutDeps('mjs')) {
        const [esmnInputOptions, esmnOutputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, false)
        await rollupBuild(context.pkgPath, esmnInputOptions, esmnOutputs, watch)
      }
      if (context.bundleWithDeps('mjs')) {
        const [esmnInputOptions, esmnOutputs] = await rollupModulesForEsmNode(context, pkgJsonPath, pkgJson, input, true)
        await rollupBuild(context.pkgPath, esmnInputOptions, esmnOutputs, watch)
      }
    }
    if (context.isTargetingBrowser) {
      // ESM Browser
      const mjsWithoutDeps = context.bundleWithoutDeps('mjs')
      const [esmInputOptions, esmOutputs] = await rollupModulesForEsm(context, pkgJsonPath, pkgJson, input, mjsWithoutDeps)
      await rollupBuild(context.pkgPath, esmInputOptions, esmOutputs, watch)
    }
  }
  
  // UMD and IIFE - If Browser
  if (context.isTargetingBrowser) {
    if (context.bundleIt('umd')) {
      const umdWithoutDeps = context.bundleWithoutDeps('umd')
      if (umdWithoutDeps) {
        const [umdInputOptions, umdOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, false, umdWithoutDeps)
        await rollupBuild(context.pkgPath, umdInputOptions, umdOutputs, watch)
      }
      
      const umdWithDeps = context.bundleWithDeps('umd')
      if (umdWithDeps) {
        const [umdbInputOptions, umdbOutputs] = await rollupModulesForUmd(context, pkgJsonPath, pkgJson, input, true, umdWithDeps)
        await rollupBuild(context.pkgPath, umdbInputOptions, umdbOutputs, watch)
      }
    }

    if (context.bundleIt('iife')) {
      const iifeWithoutDeps = context.bundleWithoutDeps('iife')
      if (iifeWithoutDeps) {
        const [iifeInputOptions, iifeOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, false, iifeWithoutDeps)
        await rollupBuild(context.pkgPath, iifeInputOptions, iifeOutputs, watch)
      }
      
      const iifeWithDeps = context.bundleWithDeps('iife')
      if (iifeWithDeps) {
        const [iifebInputOptions, iifebOutputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, true, iifeWithDeps)
        await rollupBuild(context.pkgPath, iifebInputOptions, iifebOutputs, watch)
      }
    }
  }  
  
  // Main file
  const [main_file_suffix, main_file] = context.getMainFile(pkgJson.name) 
  if (main_file_suffix) {
    if (context.bundleIt(main_file_suffix)) {
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
  const watch = context?.options?.watch

  const [inputOptions, outputs] = await rollupModulesForIife(context, pkgJsonPath, pkgJson, input, demo_output, true)
  await rollupBuild(context.pkgPath, inputOptions, outputs, watch)

}


export {rollupBundle, rollupBundleForNollup}