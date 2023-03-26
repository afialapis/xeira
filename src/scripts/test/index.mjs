/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { testWithMocha } from './mocha/index.mjs'
//import { testWithMochaAPI } from './mocha_api/index.mjs'
import {parseMochaTestPath, parseMochaExtraParams} from './params.mjs'
async function xeiraTest(context) {

  const testPathStr= await parseMochaTestPath(context)
  const extraParams= await parseMochaExtraParams(context)

  await testWithMocha(context, extraParams, testPathStr)
  //await testWithMochaAPI(context, extraParams, testPathStr)

}

export default xeiraTest
