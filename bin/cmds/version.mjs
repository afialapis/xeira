import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import xeiraVersion from '../../src/scripts/version/index.mjs'

const aliases= {'type': 't', 'number': 'n'}
const configOptions= ['verbose']


const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('version')} [${coption_name('--type')} | ${coption_name('--number')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Version handling

${ctitle('OPTIONS')}

  ${coption_name('--type')}, ${coption_name('--t')}
    Type of version changes. Possible values are:
    ${coption_value('patch')}, ${coption_value('minor')} or ${coption_value('major')}.

  ${coption_name('--number')}, ${coption_name('--n')}
    Specify the exact version number. For example: ${coption_value('1.2.3')}.  

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira version --type=minor')}
    Update your ${cfilename('./package.json')} minor version.
    For example, from ${coption_value('1.2.3')} to ${coption_value('1.3.3')}.

  ${cexample('xeira version --n=3.3.3')}
    Update your ${cfilename('./package.json')} version to ${coption_value('3.3.3')}.
`

export {aliases, configOptions, help, xeiraVersion as handler}


