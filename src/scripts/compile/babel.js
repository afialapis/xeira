const path = require('path');
const {compileDirectory} = require('./iter');
const {access, writeFile} = require('fs/promises');
const {transformFileAsync} = require("@babel/core");
const { pkgJsonRead } = require('../../utils/pkgJson');

async function compileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback) {
 
  // prepae babel options
  let babelConfig
  try {
    const babelrc= path.join(pkgPath, '.babelrc')
    await access(babelrc)
    babelConfig = require(babelrc)
  } catch(e) {

    const pkgJson = pkgJsonRead(pkgPath)
    if (pkgJson.babel != undefined) {
      babelConfig = pkgJson.babel

      if (babelConfig.extends) {
        babelConfig.extends= babelConfig.extends.replace('./node_modules/xeira/configs', path.join(__dirname,'../../../configs'))
      }

    } else {
      const {getBabelConfig} = require('../../config/babel');
      babelConfig = getBabelConfig(xeiraConfig);
    }

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