/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { getXeiraConfigObj } from '../../config/xeira.mjs'
import { demoWithNollup } from './nollup/run/index.mjs'
import { initDemoFolderForNollup } from './nollup/init/index.mjs'
import { demoWithRollup } from './rollup/run/index.mjs'
import { initDemoFolderForRollup } from './rollup/init/index.mjs'
import { demoHelp } from '../help/actions.mjs'
import {red, cyan} from '../../utils/colors.mjs'

(async () => {
 
  const pkgPath= process.env.PWD
 
  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)  

  

  if (! xeiraConfig.hasDemo()) {
    const msg= `${red('Error: Trying to run demo but xeira is not aware of it')}. Try running ${cyan('npx xeira demo init [force]')}`
    console.log(`[xeira][demo] ${msg}`)
    throw new Error(msg)
  }
 
  const demoer= xeiraConfig.getDemoer()
  const args = process.argv.slice(2)

  if (args[0]=='init') {
    const force= args[1]=='force'
    if (demoer=='nollup') {
      await initDemoFolderForNollup(pkgPath, xeiraConfig, force)
    } else {
      await initDemoFolderForRollup(pkgPath, xeiraConfig, force)
    }
  } else {
    if (demoer=='nollup') {
      await demoWithNollup(pkgPath, xeiraConfig)
    } else {
      await demoWithRollup(pkgPath, xeiraConfig)
    }
  }
 
 })().catch((error) => {
   console.error(error)
   
   const pkgPath= process.env.PWD
   process.exitCode = 1
   demoHelp(pkgPath, error)
 })
 