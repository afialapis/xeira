import path from 'path'
import {stat} from 'fs/promises'

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

async function parseMochaTestPath(context) {
  let testPaths= []

  let tFiles= context?.options?.files || ''
  tFiles= tFiles.split(',') || []

  for (const tFile of tFiles) {
    const fullTestPath= path.join(context.pkgPath, tFile)
    let asDir= false
    try {
      const stats= await stat(fullTestPath)
      if (stats.isDirectory()) {
        testPaths.push(`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`)
        asDir= true
      } 
    } catch(_) {}
    if (!asDir) {
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


async function parseMochaExtraParams(context) {
  let extraParams= []
  return extraParams
}

export {parseMochaTestPath, parseMochaExtraParams}