/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import { getXeiraConfigObj } from '../../config/xeira.mjs'
import { transpileWithBabel } from './babel.mjs'
import { noTranspile } from './notranspile.mjs'
import { minimifyWithUglify } from './uglify.mjs'
import { transpileHelp } from '../help/actions.mjs'


async function xeiraTranspile(pkgPath, sourcePath, destPath) {
  // get xeira config
  const xeiraConfig = await getXeiraConfigObj(pkgPath)

  // minifier callback
  const minimifyCallback = async (code) => {
    if (xeiraConfig.minifyWithUglify) {
      const res= await minimifyWithUglify(xeiraConfig, code)
      return res
    }
    return code
  }
  
  if (xeiraConfig.transpileWithBabel) {
    await transpileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback)
  } else {
    await noTranspile(pkgPath, sourcePath, destPath, minimifyCallback)
  }
}


(async () => {
  const pkgPath= process.env.PWD

  const args = process.argv.slice(2)
  let sourcePath= 'src'
  let destPath = 'lib'
  if (args.length==2) {
    sourcePath = args[0] || 'src'
    destPath = args[1] || 'lib'
  } else {
    console.warn(`[xeira] transpile: no params passed, so taking defaults. npx xeira transpile [src] [lib].`)
  }

  await xeiraTranspile(pkgPath, sourcePath, destPath)
})().catch((error) => {
  const pkgPath= process.env.PWD
  
  process.exitCode = 1
  transpileHelp(pkgPath, error)
})

