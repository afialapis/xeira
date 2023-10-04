/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import chokidar from 'chokidar'
import  { rollupBundle } from './rollup/index.mjs'

async function xeiraBundle(context) {
  if (context.bundleWithRollup) {
    await rollupBundle(context)

    const watch = context?.options?.watch

    if (watch) {
      const watcher = chokidar.watch(context.pkgp(context.getSourceFolder()), {
        ignored: context.pkgp(context.bundleFolder)
      })
      try {
        watcher.on('ready', () => {
          context.log_always('bundle', `Bundling in watch mode (${Object.keys(watcher.getWatched())})`)
          
          watcher.on('all', () => {  
            rollupBundle(context)
          })
        })
      } catch(error) {
        watcher.close().then(() => {
          context.log_always('bundle', `Bundling watcher closed!`)
        })
      }
    }

  } else {
    console.warn('[xeira] bundle: bundler not specified or not implement yet')
  }
}

export default xeiraBundle
