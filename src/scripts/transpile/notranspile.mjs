import {transpileDirectory} from './iter.mjs'
import {readFile, writeFile} from 'fs/promises'
import { log_info } from '../../utils/log.mjs'
import { blue } from '../../utils/colors.mjs'

async function noTranspile(xeiraConfig, minimifyCallback) {
  log_info(xeiraConfig, 'transpile', `No-Transpiling folder ${blue(xeiraConfig.pkgPath)} to ${blue(xeiraConfig.sourceFolder)}`)


  await transpileDirectory(xeiraConfig.pkgPath, xeiraConfig.sourceFolder, xeiraConfig.transpileFolder, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = await minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

export {
  noTranspile
}