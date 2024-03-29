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

import path from 'path'
import { fileURLToPath } from 'url'
import yargsParser from 'yargs-parser'
import assert from 'node:assert/strict'
import {ctitle, ccmd, cxeira, coption_name, cexample, cerror, cfilename} from '../src/utils/colors.mjs'
import commands from './cmds/index.mjs'
import { getXeiraContexts } from '../src/context/index.mjs'
import { buildChecker } from './cmds/util/index.mjs'
import { readJsonFileSync } from '../src/utils/json.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const help= `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} <${ccmd('command')}> [${coption_name('options')}]

${ctitle('DESCRIPTION')}

  Lint, test, demo, dev serve, transpile, bundle, versioning, static site... 
  all tools you need, from a single command.

${ctitle('OPTIONS')}

  ${ctitle('<command>')}

    One of ${ccmd('init')}, ${ccmd('lint')}, ${ccmd('test')}, ${ccmd('demo')}, ${ccmd('dev')}, ${ccmd('transpile')}, ${ccmd('bundle')}, ${ccmd('version')} or ${ccmd('site')}.

  ${ctitle('[options]')}

    ${coption_name('--help'), coption_name('--h')}
      Show this help

    ${coption_name('--version'), coption_name('--v')}
      Show current xeira version

    ${coption_name('...')}
      Check particular command helps. For example:

        ${cexample('xeira xeira init --help')}
`

const command_names= ['init', 'lint', 'test', 'demo', 'dev', 'transpile', 'bundle', 'version', 'site']

async function xeira() {
  const cwd = process.env.PWD
  const argv= yargsParser(process.argv.slice(2))

  try {
    const command_name = argv['_'][0]
    assert.notEqual(command_names.indexOf(command_name), -1)

    delete argv['_']

    const exec= commands[command_name]

    const checker= buildChecker(exec.aliases, exec.configOptions)
    const err= checker(argv)
    if (err) {
      console.log(exec.help)
      console.log(cerror(err))
    } else {
      const opts= Object.keys(argv)
      if ((opts.indexOf('h')>=0) || (opts.indexOf('help')>=0)) {
        console.log(exec.help)
      } else {
        const contexts= getXeiraContexts(cwd, argv, exec?.aliases || {})
        for (const context of contexts) {
          if (contexts.length>1) {
            context.log_info(command_name, `Running on folder ${cfilename(context.pkgPath.replace(cwd, '.'))}`)
          }
          await exec.handler(context)
        }
      }
    }

  } catch(e) {
    if (argv.version || argv.v) {
      const xeJson= readJsonFileSync(path.join(__dirname, '..', 'package.json'))
      console.log(`${xeJson.name}: ${xeJson.version}`)    
      return
    }
    console.log(help)
    console.log('')
    //console.log(exec.help)
    console.log(cerror(e))
  }
}

xeira()