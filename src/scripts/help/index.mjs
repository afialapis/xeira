/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import {globalHelp, helpHelp} from './actions.mjs'

(async () => {
  globalHelp()
  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  helpHelp(pkgPath, error)
})


