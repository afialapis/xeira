/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { demoWithNollup } from './nollup/run/index.mjs'
import { initDemoFolderForNollup } from './nollup/init/index.mjs'
import { demoWithRollup } from './rollup/run/index.mjs'
import { initDemoFolderForRollup } from './rollup/init/index.mjs'

async function xeiraDemo(context)  {
  const init= context?.options?.init===true
  const force= context?.options?.force===true

  if (! context.hasDemo()) {
    const msg= 'Error: Trying to run demo but xeira is not aware of it. Try running "npx xeira demo init [force]"'
    context.log_error('demo', msg)
    throw new Error(msg)
  }
 
  const demoer= context.getDemoer()

  if (init) {
    if (demoer=='nollup') {
      await initDemoFolderForNollup(context, force)
    } else {
      await initDemoFolderForRollup(context, force)
    }
  } else {
    if (demoer=='nollup') {
      await demoWithNollup(context)
    } else {
      await demoWithRollup(context)
    }
  }
 
}

export default xeiraDemo
