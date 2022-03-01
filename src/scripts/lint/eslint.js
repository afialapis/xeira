const path = require('path');
const { ESLint } = require("eslint");
const {getEslintConfig, getEslintIgnorePath} = require('../../defaults/eslint');
 
async function lintWithEslint(pkgPath, xeiraConfig, sourcePath) {

  // prepare eslint options
  let overrideConfig
  try {
    overrideConfig = require(path.join(pkgPath, '.eslintrc.js')) 
  } catch(e) {
    overrideConfig = getEslintConfig(xeiraConfig);
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
 