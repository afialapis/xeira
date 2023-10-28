/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { devWithNollup } from './nollup/index.mjs'
import { devWithRollup } from './rollup/index.mjs'

async function xeiraDev(context, callback)  {

 
  const devserver= context.getDevServer()


  if (devserver=='nollup') {
    await devWithNollup(context, callback)
  } else {
    await devWithRollup(context, callback)
  }
 
}

export default xeiraDev
