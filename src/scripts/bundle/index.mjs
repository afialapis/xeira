/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import  { rollupBundle } from './rollup/index.mjs'

async function xeiraBundle(context) {
  if (context.bundleWithRollup) {
    await rollupBundle(context)
  } else {
    console.warn('[xeira] bundle: bundler not specified or not implement yet')
  }
}

export default xeiraBundle
