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
import { log_error } from '../../utils/log.mjs'

async function xeiraDemo(xeiraConfig, init, force)  {
  if (! xeiraConfig.hasDemo()) {
    const msg= 'Error: Trying to run demo but xeira is not aware of it. Try running "npx xeira demo init [force]"'
    log_error('demo', msg)
    throw new Error(msg)
  }
 
  const demoer= xeiraConfig.getDemoer()

  if (init) {
    if (demoer=='nollup') {
      await initDemoFolderForNollup(xeiraConfig, force)
    } else {
      await initDemoFolderForRollup(xeiraConfig, force)
    }
  } else {
    if (demoer=='nollup') {
      await demoWithNollup(xeiraConfig)
    } else {
      await demoWithRollup(xeiraConfig)
    }
  }
 
}

export default xeiraDemo
