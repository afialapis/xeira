import {writeFile, access} from 'fs/promises'
import os from 'os'
import path from 'path'
import prompts from 'prompts'

function __objectToJson(config) {
  return JSON.stringify(config, null, 2) + os.EOL
}

function _objectToJs(config) {
  return `module.exports = ${__objectToJson(config)}`
}

async function _saveFileWithConfirm(filename, content, force, message) {
  try {
    await access(filename)
    
    if (! force) {
      const questions= [{
        type: 'confirm',
        name: 'overwrite',
        message: message || `${path.basename(filename)} already exists. Do you wanrt to overwrite it?`,
        initial: false      
      }]

      const answers = await prompts(questions)

      if (answers.overwrite !== true) {
        return
      }
    }
  } catch(e) {}

  await writeFile(
    filename,
    content
  )
}

async function saveObjectToJsonWithConfirm(filename, obj, force) {
  await _saveFileWithConfirm(filename, __objectToJson(obj), force)
}

async function saveObjectToJsWithConfirm(filename, obj, force) {
  await _saveFileWithConfirm(filename, _objectToJs(obj), force)
}

function removeTopParent(fpath) {
  const startsWithDel= fpath.indexOf('/')==0
  const index = startsWithDel ? 2 : 1
  const parts = fpath.split('/').slice(index)
  return path.join(...parts);
}



export {
  saveObjectToJsonWithConfirm, saveObjectToJsWithConfirm, removeTopParent
}