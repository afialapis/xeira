import {ctitle, ccmd, cxeira, coption_value, cexample, cfilename, coption_name} from '../../src/utils/colors.mjs'
import xeiraBundle from '../../src/scripts/bundle/index.mjs'
import {configText, monoText, helpText} from './util/index.mjs'

const aliases= {bundle_folder: 'to', bundle_name: 'name', bundle_inline_dynamic_imports: 'dyn_inline'}

const configOptions= ['product', 'target', 
  'source_index', 'bundle_folder', 'bundle_inline_dynamic_imports', 
  'bundler', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('bundle')} [${coption_name('--bundle_name')}] [${coption_value('config')}] [${coption_name('--filter')}]

${ctitle('DESCRIPTION')}

  Bundle your code.
  It will smartly create the bundle files you need (CJS and/or ESM and/or UMD), based
  on the ${cfilename('xeira.json')} configuration.

${ctitle('OPTIONS')}

  ${coption_name('--bundle_name')}, ${coption_name('--name')}
    Base name for the built bundles.
    By default, it is the ${coption_value('package.json name')} field.

  ${helpText}
  
  ${configText(configOptions)}
  
  ${monoText}

${ctitle('EXAMPLES')}

  ${cexample('xeira bundle')}
    Bundles your code from ${cfilename('./src/index.js')} to ${cfilename('./dist')} folder.

  ${cexample('xeira bundle --source_index=./src/index.mjs --to=./custom_dist')}
    Bundles your code from the ESM entry ${cfilename('./src/index.mjs')} to ${cfilename('./custom_dist')} folder.
`

export {aliases, configOptions, help, xeiraBundle as handler}
