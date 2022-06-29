/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { getXeiraConfigObj } from '../../config/xeira.mjs'
import { versioning } from './versioning.mjs'
import { versionHelp } from '../help/actions.mjs'



(async () => {
  const pkgPath= process.env.PWD

  // get args
  const args = process.argv.slice(2)

  let versionType= '', filterPattern= ''
  if (args.length>=1) {
    versionType = args[0] || ''

    if (args.length>1) {
      if (args[1]=='-filter') {
        filterPattern= args[2]
      } else {
        throw Error('Invalid filtering parameters')
      }
    }

  } else {
    throw Error('Invalid number of parameters')
  }

  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)

  // do the versioning
  await versioning(pkgPath, xeiraConfig, versionType, filterPattern)
  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  versionHelp(pkgPath, error)
})
