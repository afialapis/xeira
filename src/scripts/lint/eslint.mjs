import { promises as fs } from 'fs'
import path from 'path'
import { ESLint } from "eslint"
import { getEslintConfig } from '../../config/eslint.mjs'

async function _findEslintConfig(folder) {
  const filenames = ['eslint.config.js', 'eslint.config.mjs'];

  for (const filename of filenames) {
    const filePath = path.join(folder, filename);
    try {
      await fs.access(filePath);
      return filePath;
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  return undefined
}


async function lintWithEslint(context, sourcePath) {
  const baseConfig = await getEslintConfig(context)
  // const basePath = sourcePath
  //   ? path.join(context.pkgPath, sourcePath)
  //   : context.pkgPath
  
  // let overrideConfig = {}
  const customConfigPath= await _findEslintConfig(context.pkgPath)
  // f (customConfigPath) {
  //  try {
  //    overrideConfig = JSON.parse(fs.readFileSync(customConfigPath, 'utf8'))
  //  } catch(e) {
  //    console.log(`[xeira][lint] Error reading ${customConfigPath}: ${e}`)
  //  }
  // 

  const ignorePatterns = [
    "dist/",
    "lib/",
    "libs/",
    "build/",
    "arredemo/"
  ]

  const lintPatterns = [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.es6"
  ]
  
  const options= {
    cwd: context.pkgPath,
    ignorePatterns,
    baseConfig,
    //overrideConfig,
    errorOnUnmatchedPattern: false,
    // If there is no eslint.config.js in the project root,
    //   we tell EsLiint to not search for a file (and avoid an error)
    overrideConfigFile: customConfigPath ? null : true
  }

  // call eslint's node api
  const eslint = new ESLint(options);

  const results = await eslint.lintFiles(lintPatterns);

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  console.log(resultText);
}

export {
  lintWithEslint
}
 