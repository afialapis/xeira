import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import xeiraLint from '../../src/scripts/lint/index.mjs'
import {configText, monoText, helpText} from './util/index.mjs'


const aliases= {'folder': 'f'}
const configOptions= ['linter', 'verbose']
const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('lint')} [${coption_name('--folder')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  It will simply lint your code.

${ctitle('OPTIONS')}

  ${coption_name('--folder')}, ${coption_name('--f')}
    Folder to apply lint on. Default is ${cfilename('./')}.

  ${helpText}

  ${configText(configOptions)}
  
  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira lint --f=src')}
    Lint the ${cfilename('./src')} folder
`

export {aliases, configOptions, help, xeiraLint as handler}


