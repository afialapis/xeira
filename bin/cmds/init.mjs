import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import { getConfigFromArgv } from '../../src/context/utils.mjs'
import xeiraInit from '../../src/scripts/init/index.mjs'


const aliases= {force: 'f', pkgjson: 'pj'}
const configOptions= ['product', 'target', 'source_index',
  'linter', 'transpile_folder', 'transpiler', 'minifier', 
  'bundle_folder', 'bundler', 'test_folder', 'demo_mode', 'demo_demoer', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('init')} [${coption_name('--force')}] [${coption_name('--pkgjson')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  It will guide you to create ${cfilename('xeira.json')}.

${ctitle('OPTIONS')}

  ${coption_name('--force')}, ${coption_name('--f')}
    Force ${cxeira('xeira')} to prompt you and ask you for config values even if they are already present
    on ${cfilename('xeira.json')}. Values will be overwritten there.   

  ${coption_name('--pkgjson')}, ${coption_name('--pj')}
    ${ccmd('init')} actions include to update some fields on your ${cfilename('package.json')} .
    By default, ${cxeira('xeira')} ask you for cofirmation before doing so.
    If you specify ${coption_value('pkgjson')}, ${cxeira('xeira')} proceeds without asking.       

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira init --force')}
    Will ask you on prompt about every config value

  ${cexample('xeira init --product=package --target=both --source_index=./src/index.js --linter=eslint --transpile_folder=./lib_custom --transpiler=babel --minifier=uglify --bundle_folder=./dist --bundler=rollup --test_folder=./test_custom --demo_mode=auto --demo_demoer=rollup --verbose=true')}  
    Set the whole ${cfilename('xeira.json')} from a single command
`

const handler = async function (context, argv) {
  const flyOptions= getConfigFromArgv(argv)
  const flyKeys= Object.keys(flyOptions)

  await xeiraInit(context, flyKeys, argv?.force || argv?.f, argv?.pkgjson)
}

export {aliases, configOptions, help, handler}

