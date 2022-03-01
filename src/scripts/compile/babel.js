const path = require('path');
const {compileDirectory} = require('./iter');
const {writeFile} = require('fs/promises');
const {transformFileAsync} = require("@babel/core");

async function compileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback) {
 
  // prepae babel options
  let babelConfig
  try {
    babelConfig = require(path.join(pkgPath, '.babelrc'))
  } catch(e) {
    const {getBabelConfig} = require('../../defaults/babel');
    babelConfig = getBabelConfig(xeiraConfig);
  }  

  await compileDirectory(pkgPath, sourcePath, destPath, async (filepath, destpath) => {
    let { code } = await transformFileAsync(filepath, babelConfig);
    code = minimifyCallback(code);
    return await writeFile(destpath, code);
  })
}

module.exports = {
  compileWithBabel
}