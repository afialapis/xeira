import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import xeiraDemo from '../../src/scripts/demo/index.mjs'
import {configText, monoText, helpText} from './util/index.mjs'

const aliases= {init: 'i', force: 'f'}
const configOptions= ['demo_mode', 'demo_demoer', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('demo')} [${coption_name('--init')} [${coption_name('--force')}]] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Bundle, serve and watch your package's demo web app

${ctitle('OPTIONS')}

  ${coption_name('--init')}, ${coption_name('--i')}
    Init Mode: create from scratch a ${cfilename('./demo')} folder, containing a little 
    web app to be later served by ${ccmd('xeira demo')} command.

  ${coption_name('--force')}, ${coption_name('--f')}
    If in Init Mode, and some file or folder already exist, with ${coption_name('--force')}
    you allow ${cxeira('xeira')} to overwrite it.

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira demo --init --force')}
    Inits the demo folder on ${cfilename('./demo')}. 

  ${cexample('xeira demo')}
    Serves demo web app from ${cfilename('./demo/index.js')}
`

export {aliases, configOptions, help, xeiraDemo as handler}

