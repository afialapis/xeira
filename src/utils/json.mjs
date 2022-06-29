import fsPromises from 'fs/promises'

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

export {readJsonFile}