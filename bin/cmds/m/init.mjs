import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj, getConfigKeysFromArgs } from '../../../src/config/xeira.mjs'
import xeiraInit from '../../../src/scripts/init/index.mjs'

const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('init')} [${coption_name('--force')}] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  It will guide you to create ${cfilename('xeira.json')}.

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--force')}, ${coption_name('--f')}
    Force ${ccmd('xeira')} to prompt you and ask you for config values even if they are already present
    on ${cfilename('xeira.json')}. Values will be overwritten there.   

  ${coption_value('config')} ${ctitle('values')}    

    You can specify every ${ccmd('xeira')}'s config value as a fly parameter.
    It'll be saved on ${cfilename('xeira.json')}.

    ${coption_name('--product')}
      Which kind of product are you shipping?
      Values can be: ${coption_value('package')} (default), ${coption_value('app')} or ${coption_value('other')}.

    ${coption_name('--target')}
      Are you targeting server/Node apps? Is your package running on browser? Both, maybe?
      Values can be: ${coption_value('node')} (default), ${coption_value('browser')} or ${coption_value('both')}.

    ${coption_name('--source_index')}
      Path to your main index file.
      Default value is ${cfilename('./src/index.js')}.

    ${coption_name('--react')}
      Is React going to be a dependency?
      Default is ${coption_value('false')}.
    
    ${coption_name('--monorepo')}    
      Are you handling a monorepo?
      Default is ${coption_value('false')}.
      
    ${coption_name('--linter')}    
      Which linter do you wanna use?
      Values can be: ${coption_value('eslint')} (default), ${coption_value('none')}.

    ${coption_name('--transpile_folder')}    
      Which folder will be your transpiled files placed in?
      Default value is ${coption_value('./lib')}. If ${coption_value('none')}, no transpilling will be made.

    ${coption_name('--transpiler')}    
      Which transpiler do you wanna use?
      Values can be: ${coption_value('babel')} (default), ${coption_value('none')}.

    ${coption_name('--minifier')}
      Which transpiler do you wanna use?
      Values can be: ${coption_value('uglify')} (default), ${coption_value('none')}.

    ${coption_name('--bundle_folder')}    
      Which folder will be your bundled files placed in?
      Default value is ${coption_value('./dist')}. If ${coption_value('none')}, no bundling will be made.
      
    ${coption_name('--bundler')}    
      Which bundler do you wanna use?
      Values can be: ${coption_value('rollup')} (default), ${coption_value('none')}.
      
    ${coption_name('--test_folder')}    
      Which folder are you test files placed in?
      Default value is ${coption_value('./test')}. If ${coption_value('none')}, no testing will be made.
      
    ${coption_name('--demo_mode')}  
      Values can be: ${coption_value('auto')} (default), ${coption_value('none')}.

    ${coption_name('--demo_demoer')}    
      Which bundler/server do you wanna use for your demo folder?
      Values can be: ${coption_value('rollup')} (default), ${coption_value('nollup')}, ${coption_value('none')}.

    ${coption_name('--verbose')}      
      Do you want ${ccmd('xeira')} to show extra amount of log info?
      Default is ${coption_value('false')}.

${ctitle('EXAMPLES')}

  ${cexample('xeira init --force')}
    Will ask you on prompt about every config value

  ${cexample('xeira init --product=package --target=both --source_index=./src/index.js --react=true --monorepo=false --linter=eslint --transpile_folder=./lib_custom --transpiler=babel --minifier=uglify --bundle_folder=./dist --bundler=rollup --test_folder=./test_custom --demo_mode=auto --demo_demoer=rollup --verbose=true')}  
    Set the whole ${cfilename('xeira.json')} from a single command
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'force','f','product','target','source_index','react','monorepo',
         'linter','transpile_folder','transpiler','minifier','bundle_folder',
         'bundler','test_folder','demo_mode','demo_demoer','verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)
  const flyOptions= getConfigKeysFromArgs(argv)

  await xeiraInit(xeiraConfig, flyOptions, argv?.force || argv?.f)
}

export {help, checker, handler}

