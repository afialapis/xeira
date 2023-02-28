import yargsParser from 'yargs-parser'
import assert from 'node:assert/strict';
import {ctitle, ccmd, coption_name, cexample, cerror} from '../src/utils/colors.mjs'
import commands from './cmds/m/index.mjs'


const help= `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} <${ccmd('command')}> [${coption_name('options')}]

${ctitle('DESCRIPTION')}

  Lint, test, demo, transpile, bundle, sember, static site... 
  all tools you need, from a single command.

${ctitle('OPTIONS')}

  ${ctitle('<command>')}

    One of ${ccmd('init')}, ${ccmd('lint')}, ${ccmd('test')}, ${ccmd('demo')}, ${ccmd('transpile')}, ${ccmd('bundle')}, ${ccmd('version')} or ${ccmd('site')}.

  ${ctitle('[options]')}

    ${coption_name('--help'), coption_name('--h')}
      Show this help

    ${coption_name('--version'), coption_name('--v')}
      Show current xeira version

    ${coption_name('...')}
      Check particular command helps. For example:

        ${cexample('xeira xeira init --help')}
`

const command_names= ['init', 'lint', 'test', 'demo', 'transpile', 'bundle', 'version', 'site']

export default function xeiraManual () {
  const argv= yargsParser(process.argv.slice(2))

  try {
    const command_name = argv['_'][0]
    assert.notEqual(command_names.indexOf(command_name), -1)

    delete argv['_']

    const exec= commands[command_name]
    try {
      const err= exec.checker(argv)
      if (err) {
        console.log(exec.help)
        console.log(cerror(err))
      } else {
        const opts= Object.keys(argv)
        if ((opts.indexOf('h')>=0) || (opts.indexOf('help')>=0)) {
          console.log(exec.help)
        } else {
          exec.handler(argv)
        }
      }

    } catch(cerror) {
      console.log(exec.help)
      console.log(cerror(cerror))
    }

  } catch(e) {
    console.log(help)
  }
}