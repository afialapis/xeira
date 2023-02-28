import {transpileDirectory} from './iter.mjs'
import {readFile, writeFile} from 'fs/promises'
import { log_info } from '../../utils/log.mjs'
import { blue } from '../../utils/colors.mjs'

async function noTranspile(xeiraConfig, minimifyCallback, sourceFolder= undefined) {
  const theSourceFolder = sourceFolder || xeiraConfig.sourceFolder

  log_info(xeiraConfig, 'transpile', `No-Transpiling folder ${blue(theSourceFolder)} to ${blue(xeiraConfig.transpileFolder)}`)


  await transpileDirectory(xeiraConfig.pkgPath, theSourceFolder, xeiraConfig.transpileFolder, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = await minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

export {
  noTranspile
}