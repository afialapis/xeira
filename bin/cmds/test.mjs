import path from 'path'
import {stat} from 'fs/promises'
import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import xeiraTest from '../../src/scripts/test/index.mjs'


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

// async function _parseMochaArgs(args, pkgPath, context) {
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
//   console.log(context.config)
//   let testPathStr= ''
//   if (testPaths.length) {
//     testPathStr= testPaths.join(' ')
//   } else {
//     testPathStr = `${context.testFolder}/**/*.{ts,js,mjs,cjs,jsx,es6}`
//   }
//   
// 
//   return [extraParams, testPathStr]
// 
// }
// 

async function _parseMochaTestPath(argv, context) {
  let testPaths= []

  let tFiles= argv.files || argv.f || ''
  tFiles= tFiles.split(',') || []

  for (const tFile of tFiles) {
    const fullTestPath= path.join(context.pkgPath, tFile)
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
      `${path.join(context.pkgPath, context.testFolder)}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    )
  }
  
  return testPaths.join(' ')

}


async function _parseMochaExtraParams(_argv, _context) {
  let extraParams= []
  return extraParams
}



const aliases= {'files': 'f'}
const configOptions= ['test_folder', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('test')} [${coption_name('--files')}] [${coption_value('config')}] [${coption_value('mocha_params')}]

${ctitle('DESCRIPTION')}

  Run you runit tests!

${ctitle('OPTIONS')}

  ${coption_name('--files')}, ${coption_name('--f')}
    Entry point for your tests. If several, you may specify a comma-separated list of files.
    Usage of patterns is also allowed.

  ${helpText}   

  ${configText(configOptions)}

  ${coption_value('mocha_params')} ${ctitle('values')}    

    You can specify any param to be passed directly to Mocha.

    Check info here: https://mochajs.org/#command-line-usage.

  ${monoText}


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



const handler = async function (context, argv) {
  // const args = loadOptions(process.argv.slice(3))
  // console.log(args)
  const testPathStr= await _parseMochaTestPath(argv, context)
  const extraParams= await _parseMochaExtraParams(argv, context)

  await xeiraTest(context, extraParams, testPathStr)
}

export {aliases, configOptions, help, handler}

