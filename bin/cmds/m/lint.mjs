import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraLint from '../../../src/scripts/lint/index.mjs'

const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('lint')} [${coption_name('--folder')}] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  It will guide you to create ${cfilename('xeira.json')}.

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--folder')}, ${coption_name('--f')}
    Folder to apply lint on. Default is ${cfilename('./')}. 

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

    ${coption_name('--linter')}    
      Which linter do you wanna use?
      Values can be: ${coption_value('eslint')} (default), ${coption_value('none')}.

    ${coption_name('--verbose')}      
      Do you want ${ccmd('xeira')} to show extra amount of log info?
      Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira lint --f=src')}
    Lint the ${cfilename('./src')} folder
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'folder','f', 'linter', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)
  await xeiraLint(xeiraConfig, argv?.folder || argv?.f)
}

export {help, checker, handler}
