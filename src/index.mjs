import { getXeiraContexts } from "./context/index.mjs"
import { cfilename } from "./utils/colors.mjs"
import { log_info } from "./utils/log.mjs"
import commands from '../bin/cmds/index.mjs'

function _makeCommandWrapper (command_name) {
  async function __runCommand(options) {
    const cwd = process.env.PWD

    const command = commands[command_name]
    const aliases = command.aliases
    const handler = command.handler

    const contexts= getXeiraContexts(cwd, options, aliases)

    for (const context of contexts) {
      if (contexts.length>1) {
        log_info(context, command_name, `Running on folder ${cfilename(context.pkgPath.replace(cwd, '.'))}`)
      }
      await handler(context)
    }
  }
  return __runCommand
}

const xeiraInit = _makeCommandWrapper('init')
const xeiraLint = _makeCommandWrapper('lint')
const xeiraTest = _makeCommandWrapper('test')
const xeiraDemo = _makeCommandWrapper('demo')
const xeiraTranspile = _makeCommandWrapper('transpile')
const xeiraBundle = _makeCommandWrapper('bundle')
const xeiraVersion = _makeCommandWrapper('version')
const xeiraSite = _makeCommandWrapper('site')

export {
  xeiraInit,
  xeiraLint,
  xeiraTest,
  xeiraDemo,
  xeiraTranspile,
  xeiraBundle,
  xeiraVersion,
  xeiraSite
}
