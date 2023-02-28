import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {ctitle, ccmd, coption_name, coption_value} from '../src/utils/colors.mjs'
import {commands} from './cmds/y/index.mjs'

export default function xeiraYargs() {

  yargs(hideBin(process.argv))
    .usage(`\n${ccmd('npx xeira <command> [options]')}`)
    .help()
    .version()
    .epilogue(coption_value('For more information, check https://xeira.afialapis.com'))
    .updateStrings({
      'Commands:': ctitle('Commands'),
      'Options:': ctitle('Options'),
      'Examples:': ctitle('Examples'),
      'Show help': coption_name('Show help'),
      'Show version number': coption_name('Show version number'),
    })
    .wrap(155)
    .command(commands)
    .demandCommand()
    .argv
}