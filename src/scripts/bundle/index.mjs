/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import  { getXeiraConfigObj } from '../../config/xeira.mjs'
import  { rollupBundle } from './rollup/index.mjs'
import  { bundleHelp } from '../help/actions.mjs'

async function xeiraBundle(pkgPath, sourceIndex, destPath) {
  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)
  
  if (xeiraConfig.bundleWithRollup) {
    await rollupBundle(pkgPath, xeiraConfig, sourceIndex || xeiraConfig.sourceIndex, destPath || xeiraConfig.bundleFolder)
  } else {
    console.warn('[xeira] bundle: bundler not specified or not implement yet')
  }
}


(async () => {
  const pkgPath= process.env.PWD


  const args = process.argv.slice(2)
  let sourceIndex= undefined
  let destPath = undefined
  if (args.length>=1) {
    sourceIndex = args[0] || undefined
  }
  if (args.length>=2) {
    destPath = args[1] || undefined
  }

  await xeiraBundle(pkgPath, sourceIndex, destPath)
  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  bundleHelp(pkgPath, error)
})

