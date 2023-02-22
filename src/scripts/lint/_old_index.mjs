/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { getXeiraConfigObj } from '../../config/xeira.mjs'
import {lintWithEslint} from './eslint.mjs'
import {lintHelp} from '../help/actions.mjs'



(async () => {

  const pkgPath= process.env.PWD
  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)
  const defSourcePath = xeiraConfig.sourceFolder  

  const args = process.argv.slice(2)
  let sourcePath= undefined
  if (args.length>=1) {
    sourcePath = args[0]
  }

  if (xeiraConfig.lintWithEslint) {
    await lintWithEslint(pkgPath, xeiraConfig, sourcePath || defSourcePath)
  } else {
    console.warn(`[xeira] lint: no linter specified in xeira settings.`)
  }
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  lintHelp(pkgPath, error)
})
