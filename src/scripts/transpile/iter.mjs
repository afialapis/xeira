import path from 'path'
import {readdir, stat, mkdir, access} from 'fs/promises'
import { removeTopParent } from '../../utils/io.mjs'
import { log_error } from '../../utils/log.mjs';
import { blue } from '../../utils/colors.mjs';

 
async function _transpileFile (basePath, filePath, destPath, forceExtension, callback) {
  const realSourcePath = path.join(basePath, filePath)
  const withouParent = removeTopParent(filePath).replace('.mjs', '.'+forceExtension);
  const realDestPath = path.join(basePath, destPath, withouParent);
  
  const destFileFolder = path.dirname(realDestPath)
  
  try {
    await access(destFileFolder)
  } catch(e) {
    await mkdir(destFileFolder, { recursive: true })
  }
  
  return await callback(realSourcePath, realDestPath)
}


async function transpileDirectory (basePath, sourcePath, destPath, forceExtension, callback) {
  let files= []
  try {
    files = await readdir(path.join(basePath, sourcePath))
  } catch(e) {
    log_error('transpile', `Folder ${blue(path.join(basePath, sourcePath))} does not exist`)
    return
  }

  return Promise.all(
    files.map(async (file) => {
      const wholeFilePath= path.join(basePath, sourcePath, file)
      const filePath= path.join(sourcePath, file)
      const stats= await stat(wholeFilePath)
      if (stats.isDirectory()) {
        return await transpileDirectory(basePath, filePath, destPath, forceExtension, callback)
      } else if (stats.isFile()) {
        const extension= path.extname(file)
        const okExt = ['.js', '.ts', '.mjs', '.cjs', '.jsx', '.es6'].indexOf(extension) >= 0
        if (okExt) {
          return await _transpileFile(basePath, filePath, destPath, forceExtension, callback)
        }
      }
  }))
}

export {
  transpileDirectory
}