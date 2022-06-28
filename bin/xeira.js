#!/usr/bin/env node
/**
* Copyright (c) 2022-present, afialapis.com
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

const path = require('path')
const spawn = require('cross-spawn')
const args = process.argv.slice(2)

const xeiraActions= ['init', 'lint', 'transpile', 'bundle', 'version', 'test', 'help']

const scriptIndex = args.findIndex(
  x => xeiraActions.indexOf(x) >= 0
)

const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []

const xeiraScriptsPath= path.join(__dirname, '../src/scripts')

if (xeiraActions.includes(script)) {
  const result = spawn.sync(
    process.execPath,
    nodeArgs
      .concat(require.resolve(path.join(xeiraScriptsPath, script)))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: 'inherit' }
  )
  if (result.signal) {
    if (result.signal === 'SIGKILL') {
      console.log(
        'The script failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
      )
    } else if (result.signal === 'SIGTERM') {
      console.log(
        'The script failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
      )
    }
    process.exit(1)
  }
  process.exit(result.status)
} else {
   const {globalHelp} = require(path.join(xeiraScriptsPath, 'help/actions'))

   process.exitCode = 1
   const msg= `Unknown script ${script}`
   const extra= `
     Perhaps you need to update xeira?
     Check https://github.com/afialapis/xeira
   `
   globalHelp({message: msg}, extra)
}