import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import xeiraTranspile from '../../src/scripts/transpile/index.mjs'

const aliases= {source_folder: 'from', transpile_folder: 'to'}
const configOptions= ['source_index', 'transpile_folder', 'transpiler', 'minifier', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('transpile')} [${coption_name('--source_folder')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Transpile your code

${ctitle('OPTIONS')}

  ${coption_name('--source_folder')}, ${coption_name('--from')}
    Folder where your code to be transpiled is in.
    By default, it is the folder where the ${coption_value('config')}'s field
    ${coption_name('--source_index')} is in (${cfilename('./src')}).

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}  

${ctitle('EXAMPLES')}

  ${cexample('xeira transpile')}
    Transpiles and minifies your ${cfilename('./src')} code to ${cfilename('./lib')}. 

  ${cexample('xeira transpile --from=./custom_src --to=./custom_lib')}
    Transpiles and minifies your ${cfilename('./custom_src')} code to ${cfilename('./custom_lib')}. 

  ${cexample('xeira transpile --transpiler=none --minifier=uglify')}
    Minifies your ${cfilename('./src')} code to ${cfilename('./lib')}. 
`

const handler = async function (context, argv) {
  const sourceFolder = argv?.source_folder || argv?.from

  await xeiraTranspile(context, sourceFolder)
}

export {aliases, configOptions, help, handler}

