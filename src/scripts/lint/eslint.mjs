import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import lodash from 'lodash'

import { ESLint } from "eslint"
import {getEslintConfig, getEslintIgnorePath} from '../../config/eslint.mjs'
import { pkgJsonRead } from '../../utils/pkgJson.mjs'
import { readJsonFile } from '../../utils/json.mjs'
 
async function lintPrepareOptions(pkgPath, xeiraConfig) {
  const baseConfig = await getEslintConfig(xeiraConfig)
  const overrideConfig = {}

  const pkgJson = await pkgJsonRead(pkgPath)
  if (pkgJson.eslintConfig != undefined) {
    const eslintExtends= pkgJson.eslintConfig?.extends
    if (eslintExtends) {
      let configPaths= Array.isArray(eslintExtends)
        ? eslintExtends
        : [eslintExtends]

      for (var p of configPaths) {
        const configPath= path.join(pkgPath, p)
        const config= await import(configPath)
        lodash.merge(overrideConfig, config.default)
      }
    }
  }

  return [baseConfig, overrideConfig]

}

async function lintWithEslint(pkgPath, xeiraConfig, sourcePath) {

//  // prepare eslint options
//  let overrideConfig
//  try {
//    overrideConfig = await import(path.join(pkgPath, '.eslintrc.js'))
//  } catch(e) {
//    const pkgJson = await pkgJsonRead(pkgPath)
//    if (pkgJson.eslintConfig != undefined) {
//      const eslintExtends= pkgJson.eslintConfig.extends
//      
//      if (eslintExtends) {
//        let configPaths= Array.isArray(eslintExtends)
//          ? eslintExtends
//          : [eslintExtends]
//
//        configPaths= configPaths.map(p => path.join(pkgPath, p))
//        /*
//        if (Array.isArray(overrideConfig.extends)) {
//          overrideConfig.extends= overrideConfig.extends.map(p => p.replace('./node_modules/xeira/configs', path.join(__dirname,'../../../configs')))
//        } else {
//          overrideConfig.extends= overrideConfig.extends.replace('./node_modules/xeira/configs', path.join(__dirname,'../../../configs'))
//        }
//        */
//        overrideConfig = {
//          extends: configPaths
//        }
//
//      }
//    } else {
//      overrideConfig = await getEslintConfig(xeiraConfig);
//    }
//  }

  const [baseConfig, overrideConfig] = await lintPrepareOptions(pkgPath, xeiraConfig)
  
  const ignorePath = getEslintIgnorePath();
  
  const options= {
    ignorePath,
    useEslintrc: false,
    baseConfig,
    overrideConfig
  }

  // call eslint's node api
  const eslint = new ESLint(options);

  const results = await eslint.lintFiles([path.join(pkgPath, sourcePath)]);

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  console.log(resultText);
}

export {
  lintWithEslint
}
 