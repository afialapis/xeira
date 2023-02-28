import path from 'path'
import {stat} from 'fs/promises'
import {ctitle, ccmd, coption_name, coption_value, cexample, cfilename} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraTest from '../../../src/scripts/test/index.mjs'


// import {loadOptions} from '../../node_modules/mocha/lib/cli/options.js'

// const _MOCHA_NON_BOOLEAN_ARGS= [
//   '--global', '--globals', 
//   '-j', '--jobs',
//   '--retries', 
//   '-s', '--slow', 
//   '-t', '--timeout', '--timeouts',
//   '-u', '-ui', 
//   '-R', '--reporter',
//   '-O', '--reporter-option', '--reporter-options',
//   '--config',
//   '-n', '--node-option',
//   '--package',
//   '--extension',
//   '--file',
//   '--ignore', '--exclude',
//   '-r', '--require',
//   '--watch-files',
//   '--watch-ignore',
//   '-f', '--fgrep',
//   '-g', '--grep' 
// 
// ]

// async function _parseMochaArgs(args, pkgPath, xeiraConfig) {
// 
//   let testPaths= []
//   let extraParams= []
//   
//   for (let i=0; i<args.length; i++) {
//     if (args[i].startsWith('-')) {
//       extraParams.push(args[i])
// 
//       if (_MOCHA_NON_BOOLEAN_ARGS.indexOf(args[i])>=0) {
//         extraParams.push(args[i+1])
//         i+= 1
//       }
//     } else {
//       const fullTestPath= path.join(pkgPath, args[i])
//       const stats= await stat(fullTestPath)
//       if (stats.isFile()) {
//         testPaths.push(fullTestPath)
//       } else if (stats.isDirectory()) {
//         testPaths.push(`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`)
//       } else {
//         // we assume it is a pattern string already
//         testPaths.push(fullTestPath)
//       }
//     }
//   }
//   
//   console.log('----------------------')
//   console.log(xeiraConfig.config)
//   let testPathStr= ''
//   if (testPaths.length) {
//     testPathStr= testPaths.join(' ')
//   } else {
//     testPathStr = `${xeiraConfig.testFolder}/**/*.{ts,js,mjs,cjs,jsx,es6}`
//   }
//   
// 
//   return [extraParams, testPathStr]
// 
// }
// 

async function _parseMochaTestPath(argv, xeiraConfig) {
  let testPaths= []

  let tFiles= argv.files || argv.f || ''
  tFiles= tFiles.split(',') || []

  for (const tFile of tFiles) {
    const fullTestPath= path.join(xeiraConfig.pkgPath, tFile)
    const stats= await stat(fullTestPath)
    if (stats.isFile()) {
      testPaths.push(fullTestPath)
    } else if (stats.isDirectory()) {
      testPaths.push(`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`)
    } else {
      // we assume it is a pattern string already
      testPaths.push(fullTestPath)
    }    
  }

  if (! testPaths.length) {
    tFiles.push(
      `${path.join(xeiraConfig.pkgPath, xeiraConfig.testFolder)}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    )
  }
  
  return testPaths.join(' ')

}


async function _parseMochaExtraParams(_argv, _xeiraConfig) {

  let extraParams= []
  return extraParams

}




const help = `
${ctitle('SYNPSIS')}

  ${ccmd('xeira')} ${ccmd('test')} [${coption_name('--files')}] [${coption_value('config')}] [${coption_value('mocha_params')}]

${ctitle('DESCRIPTION')}

  Run you runit tests!

${ctitle('OPTIONS')}

  ${coption_name('--help')}, ${coption_name('--h')}
    Show this help

  ${coption_name('--files')}, ${coption_name('--f')}
    Entry point for your tests. If several, you may specify a comma-separated list of files.
    Usage of patterns is also allowed.

  ${coption_value('config')} ${ctitle('values')}    

    You can specify ${ccmd('xeira')}'s config values as a fly parameter,
    so it takes preference over the saved value on ${cfilename('xeira.json')}.

  ${coption_name('--test_folder')}
    In case you have not specified any [${coption_name('--files')}], ${ccmd('xeira')}
    will search for Javascript files on this folder. Default is ${coption_value('./test')}.
    Searched extensions are ${cfilename('.ts')}, ${cfilename('.js')}, ${cfilename('.mjs')}, 
    ${cfilename('.cjs')}, ${cfilename('.jsx')}, ${cfilename('.es6')}.

  ${coption_name('--verbose')}      
    Do you want ${ccmd('xeira')} to show extra amount of log info?
    Default is ${coption_value('false')}.

  ${coption_value('mocha_params')} ${ctitle('values')}    

    You can specify any param to be passed directly to Mocha.

    Check info here: https://mochajs.org/#command-line-usage.


${ctitle('EXAMPLES')}

  ${cexample('xeira test --f=./tests/units/unit_one.js')}
    Run the ${cfilename('tests/units/unit_one.js')} test

  ${cexample('xeira test --f=./tests/units/*.{ts,js}')}
    Run every ${cfilename('.ts')} or ${cfilename('.js')} test in ${cfilename('./tests/units')}
    
  ${cexample('xeira test --f=./tests/units/unit_one.js,./tests/units/unit_two.js')}
    Run the ${cfilename('tests/units/unit_one.js')} and ${cfilename('tests/units/unit_two.js')} tests
  
  ${cexample('xeira test --test-folder=./other_tests_folder')}
    Run every Javascript file in ${cfilename('./other_tests_folder')}
`

const checker = (argv) => {
  let err= undefined
  Object.keys(argv).map((k) => {
    if (['help', 'h', 'files','f', 'test_folder', 'verbose'].indexOf(k)<0) {
      err= `Invalid option ${k}`
      return
    }
  })
  return err  
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  // get xeira config
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)

  // const args = loadOptions(process.argv.slice(3))
  // console.log(args)
  const testPathStr= await _parseMochaTestPath(argv, xeiraConfig)
  const extraParams= await _parseMochaExtraParams(argv, xeiraConfig)

  await xeiraTest(xeiraConfig, extraParams, testPathStr)
}



export {help, checker, handler}

