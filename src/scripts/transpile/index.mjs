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


async function xeiraTranspile(context) {
  const sourceFolder = context?.options?.source_folder

  // minifier callback
  const minimifyCallback = async (code) => {
    if (context.minifyWithUglify) {
      const res= await minimifyWithUglify(context, code)
      return res
    }
    return code
  }
  
  if (context.transpileWithBabel) {
    await transpileWithBabel(context, minimifyCallback, sourceFolder)
  } else {
    await noTranspile(context, minimifyCallback, sourceFolder)
  }
}


export default xeiraTranspile
