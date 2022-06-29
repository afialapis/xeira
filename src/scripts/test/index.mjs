/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { getXeiraConfigObj } from '../../config/xeira.mjs'
import { testWithMocha } from './mocha/index.mjs'
import { testHelp } from '../help/actions.mjs'

(async () => {

  const pkgPath= process.env.PWD

  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)  

  const args = process.argv.slice(2)
  let testPath= xeiraConfig.testFolder
  if (args.length>=1) {
    if (args[0]) {
      testPath = args[0]
    }
  }

  await testWithMocha(pkgPath, xeiraConfig, testPath)

})().catch((error) => {
  
  const pkgPath= process.env.PWD
  process.exitCode = 1
  testHelp(pkgPath, error)
})
