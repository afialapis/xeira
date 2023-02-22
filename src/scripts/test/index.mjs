/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { testWithMocha } from './mocha/index.mjs'
//import { testWithMochaAPI } from './mocha_api/index.mjs'

async function xeiraTest(xeiraConfig, extraParams, testPathStr) {

  await testWithMocha(xeiraConfig, extraParams, testPathStr)
  //await testWithMochaAPI(xeiraConfig, extraParams, testPathStr)

}

export default xeiraTest
