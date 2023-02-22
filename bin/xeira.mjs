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

// import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
// import { getXeiraConfigObj } from '../src/config/xeira.mjs'
import {blue_light, gray_light, cyan_italic} from '../src/utils/colors.mjs'

import { commands } from './cmds/index.mjs'
//
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


// async function _run(script, argv) {
//   try {
//     const pkgPath= process.env.PWD
//     // get xeira config
//     const xeiraConfig = await getXeiraConfigObj(pkgPath)
// 
//     const scriptPath = path.resolve(__dirname, '../src/scripts/' + script + '/run.mjs')
//     const module = await import(scriptPath)
// 
//     await module.default(pkgPath, xeiraConfig)
// 
//   } catch (error) {   
//     process.exitCode = 1
//     console.error(error)
//   }
// }

yargs(hideBin(process.argv))
  .usage(`\n${gray_light('npx xeira <command> [options]')}`)
  .help()
  .version()
  .epilogue('for more information, check https://xeira.afialapis.com')
  .updateStrings({
    'Commands:': blue_light('Commands:'),
    'Options:': blue_light('Options:'),
    'Show help': cyan_italic('Show help'),
    'Show version number': cyan_italic('Show version number'),
  })
  .wrap(125)
  .command(commands)
  .demandCommand()
  .argv
