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

async function xeiraBundle(pkgPath) {
  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)
  
  if (xeiraConfig.bundleWithRollup) {
    await rollupBundle(pkgPath, xeiraConfig)
  } else {
    console.warn('[xeira] bundle: bundler not specified or not implement yet')
  }
}


(async () => {
  const pkgPath= process.env.PWD
  await xeiraBundle(pkgPath)
  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  bundleHelp(pkgPath, error)
})

