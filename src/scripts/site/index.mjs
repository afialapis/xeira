/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import {siteHelp} from '../help/actions.mjs'

import arredemo from 'arredemo/cli'

(async () => {
  
  const pkgPath= process.env.PWD
  await arredemo(pkgPath)
  
})().catch((error) => {
  const pkgPath= process.env.PWD
  process.exitCode = 1
  siteHelp(pkgPath, error)
})


