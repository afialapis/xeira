import fsPromises from 'fs/promises'
import {readFileSync} from 'fs'
import { log_error } from './log.mjs'

async function readJsonFile(jsonPath) {
  try {
    const data = await fsPromises.readFile(jsonPath)
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    log_error('readJsonFile', err)
    return {}
  }
}

function readJsonFileSync(jsonPath, silent= false) {
  try {
    const data = readFileSync(jsonPath, {encoding:'utf8', flag:'r'})
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    if (!silent) {
      log_error('readJsonFileSync', err)
    }
    return {}
  }
}


export {readJsonFile, readJsonFileSync}