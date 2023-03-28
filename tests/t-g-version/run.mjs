
import { execSync } from "child_process"
import {xeiraVersion} from 'xeira'

// const cmd_reset = 'rm -fr node_modules package-lock.json'
// const cmd_prepare = 'npm i'
const cmd_clean_version = 'cp -f package.json.original package.json'
const cmd_compare = (folder) => `cp package.json v-temp && node node_modules/xeira/src/utils-dev/diff.mjs v-temp ${folder}`

async function _run(cmd) {
  const res= await execSync(cmd, {stdio: 'inherit'})
  return res
}

async function runVersion() {
  // await _run(cmd_reset)
  // await _run(cmd_prepare)
  await _run(cmd_clean_version)
  
  // Patch
  await xeiraVersion({type: 'path'})
  await _run(cmd_compare('v-patch'))
  
  // Minor
  await xeiraVersion({type: 'minor'})
  await _run(cmd_compare('v-minor'))
  
  // Major
  await xeiraVersion({type: 'major'})
  await _run(cmd_compare('v-major'))
  
  // Number
  await xeiraVersion({number: '4.5.6'})
  await _run(cmd_compare('v-number'))
}

runVersion()
