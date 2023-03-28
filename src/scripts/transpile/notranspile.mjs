import {transpileDirectory} from './iter.mjs'
import {readFile, writeFile} from 'fs/promises'
import { cfilename } from '../../utils/colors.mjs'

async function noTranspile(context, minimifyCallback, sourceFolder= undefined) {
  const theSourceFolder = sourceFolder || context.sourceFolder

  context.log_info('transpile', `No-Transpiling folder ${cfilename(theSourceFolder)} to ${cfilename(context.transpileFolder)}`)


  await transpileDirectory(context.pkgPath, theSourceFolder, context.transpileFolder, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = await minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

export {
  noTranspile
}