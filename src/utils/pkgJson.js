const path = require('path');
const prompts = require('prompts');
const {saveObjectToJsonWithConfirm} = require('./io');

const _pkgJsonPath = (pkgPath) => path.join(pkgPath, 'package.json')

function pkgJsonRead (pkgPath) {
  const pkgJson = require( _pkgJsonPath(pkgPath) )
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
async function pkgJsonUpdate (pkgPath, key, value, force, message) {

  const pkgJson = pkgJsonRead(pkgPath)

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
        return
      }
    }
  }

  pkgJson[key]= value

  await saveObjectToJsonWithConfirm(_pkgJsonPath(pkgPath), pkgJson, /*force*/ true)

}

module.exports = {
  pkgJsonRead,
  pkgJsonUpdate
}