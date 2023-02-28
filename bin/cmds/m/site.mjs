import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraSite from '../../../src/scripts/site/index.mjs'

const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('site')} [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Build an static site for your docs (and demo)

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira site')}
    Build site at ${cfilename('./arredemo')}.
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)
  
  await xeiraSite(xeiraConfig)
}



export {help, checker, handler}

