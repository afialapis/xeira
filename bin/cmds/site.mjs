import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import xeiraSite from '../../src/scripts/site/index.mjs'

const aliases= {}
const configOptions= ['verbose']


const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('site')} [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Build an static site for your docs (and demo)

${ctitle('OPTIONS')}

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira site')}
    Build site at ${cfilename('./arredemo')}.
`

export {aliases, configOptions, help, xeiraSite as handler}

