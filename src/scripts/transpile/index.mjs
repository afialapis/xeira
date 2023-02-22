/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { transpileWithBabel } from './babel.mjs'
import { noTranspile } from './notranspile.mjs'
import { minimifyWithUglify } from './uglify.mjs'


async function xeiraTranspile(xeiraConfig) {
  // minifier callback
  const minimifyCallback = async (code) => {
    if (xeiraConfig.minifyWithUglify) {
      const res= await minimifyWithUglify(xeiraConfig, code)
      return res
    }
    return code
  }
  
  if (xeiraConfig.transpileWithBabel) {
    await transpileWithBabel(xeiraConfig, minimifyCallback)
  } else {
    await noTranspile(xeiraConfig, minimifyCallback)
  }
}


export default xeiraTranspile
