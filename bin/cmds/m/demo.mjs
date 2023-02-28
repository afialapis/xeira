import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraDemo from '../../../src/scripts/demo/index.mjs'


const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('demo')} [${coption_name('--init')} [${coption_name('--force')}]] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Bundle, serve and watch your package's demo web app

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--init')}, ${coption_name('--i')}
    Init Mode: create from scratch a ${cfilename('./demo')} folder, containing a little 
    web app to be later served by ${ccmd('xeira demo')} command.

  ${coption_name('--force')}, ${coption_name('--f')}
    If in Init Mode, and some file or folder already exist, with ${coption_name('--force')}
    you allow ${ccmd('xeira')} to overwrite it.

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--demo_mode')}
    Right now only possible value is ${coption_value('auto')}.

  ${coption_name('--demo_demoer')}
    On of ${coption_value('rollup')} (default) or ${coption_value('nollup')}.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.


${ctitle('EXAMPLES')}

  ${cexample('xeira demo --init --force')}
    Inits the demo folder on ${cfilename('./demo')}. 

  ${cexample('xeira demo')}
    Serves demo web app from ${cfilename('./demo/index.js')}
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'force','f', 'init', 'i', 'demo_mode', 'demo_demoer', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)

  const init= ((argv.init===true) || (argv.i===true))
  const force= ((argv.force===true) || (argv.f===true))

  await xeiraDemo(xeiraConfig, init, force)
}



export {help, checker, handler}

