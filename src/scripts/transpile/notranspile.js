const {transpileDirectory} = require('./iter');
const {readFile, writeFile} = require('fs/promises');

async function noTranspile(pkgPath, sourcePath, destPath, minimifyCallback) {
  await transpileDirectory(pkgPath, sourcePath, destPath, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

module.exports = {
  noTranspile
}