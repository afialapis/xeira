import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraTranspile from '../../../src/scripts/transpile/index.mjs'


const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('transpile')} [${coption_name('--source_folder')}] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Transpile your code

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--source_folder')}, ${coption_name('--from')}
    Folder where your code to be transpiled is in.
    By default, it is the folder where the ${coption_value('config')}'s field
    ${coption_name('--source_index')} is in (${cfilename('./src')}).

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--source_index')}
    Entry point of your sorce code.
    Instead of passing ${coption_name('--source_folder')} folder, you may prefer to
    use this ${coption_value('config')} value. Default is (${cfilename('./src/index.js')}).

  ${coption_name('--transpile_folder')}, ${coption_name('--to')}
    Destination folder for the transcripted code. Default is (${cfilename('./lib')}).

  ${coption_name('--transpiler')}
    Transpiler to use. Default value is ${coption_value('babel')}.
    You can specify ${coption_value('none')}, and transpiled code
    will be same as source (no changes). Does not affect to the minifying.

  ${coption_name('--minifier')}
    Minifier to use after transpilling. Default is ${coption_value('uglify')}.
    Specify ${coption_value('none')} if you want no minifying.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira transpile')}
    Transpiles and minifies your ${cfilename('./src')} code to ${cfilename('./lib')}. 

  ${cexample('xeira transpile --from=./custom_src --to=./custom_lib')}
    Transpiles and minifies your ${cfilename('./custom_src')} code to ${cfilename('./custom_lib')}. 

  ${cexample('xeira transpile --transpiler=none --minifier=uglify')}
    Minifies your ${cfilename('./src')} code to ${cfilename('./lib')}. 
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'source_folder','from', 'transpile_folder', 'to', 
         'source_index', 'transpiler', 'minifier', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv, {transpile_folder: 'to'})

  const sourceFolder = argv?.source_folder || argv?.from

  await xeiraTranspile(xeiraConfig, sourceFolder)
}



export {help, checker, handler}

