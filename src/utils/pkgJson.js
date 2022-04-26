const path = require('path');
const prompts = require('prompts');
const {saveObjectToJsonWithConfirm} = require('./io');

const pkgJsonPath = (pkgPath) => path.join(pkgPath, 'package.json')

function pkgJsonRead (pkgPath) {
  const pkgJson = require( pkgJsonPath(pkgPath) )
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

  const pkgJson = pkgJsonRead(pkgPath)

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

module.exports = {
  pkgJsonRead,
  pkgJsonUpdate
}