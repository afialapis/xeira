import {transpileDirectory} from './iter.mjs'
import {readFile, writeFile} from 'fs/promises'

async function noTranspile(pkgPath, sourcePath, destPath, minimifyCallback) {
  await transpileDirectory(pkgPath, sourcePath, destPath, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = await minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

export {
  noTranspile
}