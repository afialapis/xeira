import path from 'path'
import {readdir, stat, mkdir, access} from 'fs/promises'
import { removeTopParent } from '../../utils/io.mjs'

 
async function _transpileFile (basePath, filePath, destPath, callback) {
  const realSourcePath = path.join(basePath, filePath)
  const withouParent = removeTopParent(filePath);
  const realDestPath = path.join(basePath, destPath, withouParent);
  
  const destFileFolder = path.dirname(realDestPath)
  
  try {
    await access(destFileFolder)
  } catch(e) {
    await mkdir(destFileFolder, { recursive: true })
  }

  console.log(`[xeira] transpiling ${filePath} ==> ${path.join(destPath, withouParent)}...`);
  
  return await callback(realSourcePath, realDestPath)
}


async function transpileDirectory (basePath, sourcePath, destPath, callback) {
  let files= []
  try {
    files = await readdir(path.join(basePath, sourcePath))
  } catch(e) {
    console.error(`[xeira] transpile: Folder ${path.join(basePath, sourcePath)} does not exist`)
    return
  }

  return Promise.all(
    files.map(async (file) => {
      const filePath= path.join(sourcePath, file)
      const stats= await stat(filePath)
      if (stats.isDirectory()) {
        return await transpileDirectory(basePath, filePath, destPath, callback)
      } else if (stats.isFile()) {
        const extension= path.extname(file)
        const okExt = ['.js', '.ts', '.mjs', '.cjs', '.jsx', '.es6'].indexOf(extension) >= 0
        if (okExt) {
          return await _transpileFile(basePath, filePath, destPath, callback)
        }
      }
  }))
}

export {
  transpileDirectory
}