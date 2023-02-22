import fs from 'fs'
import path from 'path'
import Mocha from 'mocha'
import { transformFileSync } from "@babel/core"
import {getBabelConfig} from '../../../config/babel.mjs'


async function testWithMochaAPI(xeiraConfig, extraParams, testPathStr) {

  const customBabelConfig= {
    presets: [
      ["@babel/preset-env", {
        "targets": {"esmodules": true}
      }],
      "@babel/preset-react"
    ],
    plugins: []      
  }

  // Instantiate a Mocha with options
  const mocha = new Mocha({
    reporter: 'list'
  });

  // Use non-default Mocha test directory.
  const testDir = path.join(xeiraConfig.pkgPath, xeiraConfig.testFolder) // testPathStr)

  // Search test .mjs files
  const testFiles = fs.readdirSync(testDir, {encoding: 'utf-8'})
    .filter(function(file) {
      return ['.js', '.cjs', '.mjs'].indexOf(path.extname(file))>=0
    })

  console.log(`test files on ${testDir}:`)
  console.log(testFiles)

  for (const file of testFiles) {
  
    const mjs= path.join(testDir, file)
    
    const babelConfig = await getBabelConfig(xeiraConfig, mjs, customBabelConfig)

    const cjs= mjs.replace(path.extname(file), '_temp.cjs')

    let { code } = transformFileSync(mjs, babelConfig);
    fs.writeFileSync(cjs, code)

    // Add each .js file to the mocha instance
    console.log('---------------------- mocha add file: ' + cjs)
    console.log(code)
    
    mocha.addFile(cjs);
  }

  // Run the tests.
  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
  });





}

export {
  testWithMochaAPI
}
 
