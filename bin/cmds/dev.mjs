import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import xeiraDev from '../../src/scripts/dev/index.mjs'
import {configText, monoText, helpText} from './util/index.mjs'

const aliases= {host: 'h', port: 'p'}
const configOptions= ['source_index', 'dev_server', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('dev')} [${coption_name('--host')}] [${coption_name('--port')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Bundle, serve and watch your web app

${ctitle('OPTIONS')}

  ${coption_name('--host')}, ${coption_name('--h')}
  Host where to serve the dev bundle from. Default is 'localhost'.

  ${coption_name('--port')}, ${coption_name('--p')}
    Port where to serve the dev bundle.

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira dev')}
    Serves dev app from ${cfilename('./src/index.js')}
`

export {aliases, configOptions, help, xeiraDev as handler}

