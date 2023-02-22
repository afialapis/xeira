import path from 'path'
import {stat} from 'fs/promises'
import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
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

  const tFiles= argv.files.split(',') || []
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
    const fFolder = argv.test_folder || xeiraConfig.testFolder
    tFiles.push(
      `${path.join(xeiraConfig.pkgPath, fFolder)}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    )
  }
  
  return testPaths.join(' ')

}


async function _parseMochaExtraParams(_argv, _xeiraConfig) {

  let extraParams= []
  return extraParams

}




const command = 'test [files..] [test_folder] [mocha_params...] [verbose]'
const describe = `${cyan_italic('Test your code')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs
    .option('files', {
      default: xeiraConfig.testFolder
    })   
    .option('test_folder', {
      alias: 'folder',
      default: xeiraConfig.testFolder
    })   
    .option('verbose', {
      alias: 'b',
      default: xeiraConfig.beVerbose(),
      boolean: true
    })
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

export {command, describe, builder, handler}
