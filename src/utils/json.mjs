import fsPromises from 'fs/promises'
import {readFileSync} from 'fs'

async function readJsonFile(jsonPath) {
  try {
    const data = await fsPromises.readFile(jsonPath)
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    console.log(err)
    return {}
  }
}

function readJsonFileSync(jsonPath) {
  try {
    const data = readFileSync(jsonPath, {encoding:'utf8', flag:'r'})
    const obj = JSON.parse(data)
    return obj
  } catch (err){
    console.log(err)
    return {}
  }
}


export {readJsonFile, readJsonFileSync}