/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import chokidar from 'chokidar'
import { transpileWithBabel } from './babel.mjs'
import { noTranspile } from './notranspile.mjs'
import { minimifyWithUglify } from './uglify.mjs'


async function xeiraTranspile(context, callback) {
  const sourceFolder = context?.options?.source_folder || context.getSourceFolder()
  const watch = context?.options?.watch

  // minifier callback
  const _minimifyCallback = async (code) => {
    if (context.minifyWithUglify) {
      const res= await minimifyWithUglify(context, code)
      return res
    }
    return code
  }

  const _transpileCallback = async () => {
    if (context.transpileWithBabel) {
      await transpileWithBabel(context, _minimifyCallback)
    } else {
      await noTranspile(context, _minimifyCallback)
    }
    if (callback) await callback()
  }
  
  await _transpileCallback()
  
  if (watch) {
    const watcher = chokidar.watch(context.pkgp(sourceFolder), {
      ignored: context.pkgp(context.transpileFolder)
    })
    try {
      watcher.on('ready', () => {
        context.log_always('transpile', `Transpiling in watch mode (${Object.keys(watcher.getWatched())})`)
        
        watcher.on('all', () => {  
          _transpileCallback()
        })
      })
    } catch(error) {
      watcher.close().then(() => {
        context.log_always('transpile', `Transpiling watcher closed!`)
      })
    }
  }
}


export default xeiraTranspile
