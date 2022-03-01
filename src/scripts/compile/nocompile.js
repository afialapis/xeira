const {compileDirectory} = require('./iter');
const {readFile, writeFile} = require('fs/promises');

async function noCompile(pkgPath, sourcePath, destPath, minimifyCallback) {
  await compileDirectory(pkgPath, sourcePath, destPath, async (filepath, destpath) => {
    let code = await readFile(filepath, {encoding: 'utf8'});
    code = minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

module.exports = {
  noCompile
}