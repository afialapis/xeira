const path = require('path');
const { ESLint } = require("eslint");
const {getEslintConfig, getEslintIgnorePath} = require('../../config/eslint');
const { pkgJsonRead } = require('../../utils/pkgJson');
 
async function lintWithEslint(pkgPath, xeiraConfig, sourcePath) {

  // prepare eslint options
  let overrideConfig
  try {
    overrideConfig = require(path.join(pkgPath, '.eslintrc.js')) 
  } catch(e) {
    const pkgJson = pkgJsonRead(pkgPath)
    if (pkgJson.eslintConfig != undefined) {
      overrideConfig = pkgJson.eslintConfig
      if (overrideConfig.extends) {
        overrideConfig.extends= overrideConfig.extends.map(p => p.replace('./node_modules/xeira/configs', path.join(__dirname,'../../../configs')))
      }
    } else {
      overrideConfig = getEslintConfig(xeiraConfig);
    }
  }
  
  const ignorePath = getEslintIgnorePath();

  const options= {
    ignorePath,
    useEslintrc: false,
    overrideConfig
  }

  // call eslint's node api
  const eslint = new ESLint(options);

  const results = await eslint.lintFiles([path.join(pkgPath, sourcePath)]);

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  console.log(resultText);
}

module.exports = {
  lintWithEslint
}
 