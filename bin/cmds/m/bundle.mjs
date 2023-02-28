import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraBundle from '../../../src/scripts/bundle/index.mjs'


const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('bundle')} [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Bundle your code.
  It will smartly create the bundle files you need (CJS and/or ESM and/or UMD), based
  on the ${cfilename('xeira.json')} configuration.

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--source_index')}
    Entry point of your sorce code. Default is (${cfilename('./src/index.js')}).

  ${coption_name('--bundle_folder')}, ${coption_name('--to')}
    Destination folder for the bundle files. Default is (${cfilename('./dist')}).

  ${coption_name('--bundler')}
    Bundler to use. Default value (and only by now) is ${coption_value('rollup')}.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira bundle')}
    Bundles your code from ${cfilename('./src/index.js')} to ${cfilename('./dist')} folder.

  ${cexample('xeira transpile --source_index=./src/index.mjs --to=./custom_dist')}
    Bundles your code from the ESM entry ${cfilename('./src/index.mjs')} to ${cfilename('./custom_dist')} folder.

`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'bundle_folder', 'to', 
         'source_index', 'bundler', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv, {bundle_folder: 'to'})

  await xeiraBundle(xeiraConfig)
}



export {help, checker, handler}

