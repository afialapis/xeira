import path from 'path'
import prompts from 'prompts'
import {saveObjectToJsonWithConfirm} from './io.mjs'
import {readJsonFile} from './json.mjs'

const pkgJsonPath = (pkgPath) => path.join(pkgPath, 'package.json')

async function pkgJsonRead (pkgPath) {
  // const pkgJson = await import(pkgJsonPath(pkgPath),   
  //                              {assert: {type: "json"}})
  const pkgJson= await readJsonFile(pkgJsonPath(pkgPath))
  return pkgJson
}

/**
 * 
 * @param {*} pkgPath 
 * @param {*} key 
 * @param {*} value
 * @param {*} message
 *            If `key` already exists on package.json, we ask for 
 *            overwrite confirmation (prompting `message` text)
 *  
 */
async function pkgJsonUpdate (pkgPath, changes, force, message) {

  const pkgJson = await pkgJsonRead(pkgPath)

  for (const [key, value] of Object.entries(changes)) {

    if (key in pkgJson) {
      if (force != true) {

        const questions= [{
          type: 'confirm',
          name: 'overwrite',
          message: message || `${key} already exists on package.json. Do you wanrt to overwrite it?`,
          initial: false      
        }]
    
        const answers = await prompts(questions)
    
        if (answers.overwrite !== true) {
          break
        }
      }
    }

    pkgJson[key]= value
  }

  await saveObjectToJsonWithConfirm(pkgJsonPath(pkgPath), pkgJson, /*force*/ true)

}

export {
  pkgJsonRead,
  pkgJsonUpdate
}