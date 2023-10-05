import {ctitle, ccmd, cxeira, coption_value, cexample, cfilename, coption_name} from '../../src/utils/colors.mjs'
import xeiraBundle from '../../src/scripts/bundle/index.mjs'
import {configText, monoText, helpText} from './util/index.mjs'

const aliases= {
  bundle_folder: 'to', 
  bundle_name: 'name', 
  bundle_inline_dynamic_imports: 'dyn_inline',
  bundle_node_polyfill: 'polyfill',
  bundle_extension: 'extension'
}

const configOptions= ['product', 'target', 
  'source_index', 'bundle_folder', 'bundle_name', 'bundle_extension', 
  'bundle_inline_dynamic_imports', 'bundle_node_polyfill',
  'bundler', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('bundle')} [${coption_value('config')}] [${coption_name('--filter')}] [${coption_name('--watch')}]

${ctitle('DESCRIPTION')}

  Bundle your code.
  It will smartly create the bundle files you need (CJS and/or ESM and/or UMD), based
  on the ${cfilename('xeira.json')} configuration.

${ctitle('OPTIONS')}

  ${helpText}
  
  ${configText(configOptions)}
  
  ${monoText}

  ${coption_name('--watch')}
    If passed, bundle will re-run in case some source code changes. 

${ctitle('EXAMPLES')}

  ${cexample('xeira bundle')}
    Bundles your code from ${cfilename('./src/index.js')} to ${cfilename('./dist')} folder.

  ${cexample('xeira bundle --source_index=./src/index.mjs --to=./custom_dist')}
    Bundles your code from the ESM entry ${cfilename('./src/index.mjs')} to ${cfilename('./custom_dist')} folder.
`

export {aliases, configOptions, help, xeiraBundle as handler}
