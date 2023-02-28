import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraVersion from '../../../src/scripts/version/index.mjs'

const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('version')} [${coption_name('--type')} | ${coption_name('--number')}]  [${coption_name('--filter')}] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Version handling

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--type')}, ${coption_name('--t')}
    Type of version changes. Possible values are:
    ${coption_value('patch')}, ${coption_value('minor')} or ${coption_value('major')}.

  ${coption_name('--number')}, ${coption_name('--n')}
    Specify the exact version number. For example: ${coption_value('1.2.3')}.  

  ${coption_name('--filter')}, ${coption_name('--f')}
    Filter folder to search for ${cfilename('package.json')} files on.

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira version --type=minor')}
    Update your ${cfilename('./package.json')} minor version.
    For example, from ${coption_value('1.2.3')} to ${coption_value('1.3.3')}.

  ${cexample('xeira version --n=3.3.3')}
    Update your ${cfilename('./package.json')} version to ${coption_value('3.3.3')}.
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 't', 'type', 'n', 'number', 'f', 'filter', 
         'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)

  const vType = argv.type || argv.t
  const vNumber = argv.number || argv.n
  const vFilter = argv.filter || argv.f

  await xeiraVersion(xeiraConfig, vType, vNumber, vFilter)
}



export {help, checker, handler}

