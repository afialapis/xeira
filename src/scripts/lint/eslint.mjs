import path from 'path'
// import lodash from 'lodash'

import { ESLint } from "eslint"
import {getEslintConfig, getEslintIgnorePath} from '../../config/eslint.mjs'
// import { pkgJsonRead } from '../../utils/pkgJson.mjs'

 
async function lintPrepareOptions(context) {
  const baseConfig = await getEslintConfig(context)
  const overrideConfig = {}

  // TODO
  // It makes no sense to read pkgJson.eslintConfig (it's xceira stuff)
  // We need to decide how to read possible custom config files
   
  //  const pkgJson = await pkgJsonRead(pkgPath)
  //  if (pkgJson.eslintConfig != undefined) {
  //    const eslintExtends= pkgJson.eslintConfig?.extends
  //    if (eslintExtends) {
  //      let configPaths= Array.isArray(eslintExtends)
  //        ? eslintExtends
  //        : [eslintExtends]
  //
  //      for (const p of configPaths) {
  //        const configPath= path.join(pkgPath, p)
  //        const config= await import(configPath)
  //        lodash.merge(overrideConfig, config.default)
  //      }
  //    }
  //  }

  return [baseConfig, overrideConfig]

}

async function lintWithEslint(context, sourcePath) {

  const [baseConfig, overrideConfig] = await lintPrepareOptions(context)
  
  const ignorePath = getEslintIgnorePath();
  
  const options= {
    ignorePath,
    useEslintrc: false,
    baseConfig,
    overrideConfig,
    extensions: ['.js', '.ts', '.mjs', '.cjs', '.jsx', '.es6']
  }

  // call eslint's node api
  const eslint = new ESLint(options);

  const results = await eslint.lintFiles([path.join(context.pkgPath, sourcePath)]);

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  console.log(resultText);
}

export {
  lintWithEslint
}
 