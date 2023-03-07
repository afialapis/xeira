import {coption_name} from '../../../src/utils/colors.mjs'

const helpText=
  `${coption_name('--help')}, ${coption_name('--h')}\n` +
  `    Show this help`

const helpAliases= ['help', 'h']

export {
  helpText,
  helpAliases
}
