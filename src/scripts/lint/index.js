/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const { ESLint } = require("eslint");
const { getXeiraConfig } = require('../../utils/config');
const {getEslintConfig, getEslintIgnorePath} = require('../../defaults/eslint');


async function xeiraLint(pkgPath, sourcePath) {

  // get xeira config
  const xeiraConfig = getXeiraConfig(pkgPath);
  
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

(async () => {

  const pkgPath= process.env.PWD;

  const args = process.argv.slice(2);
  let sourcePath= ''
  if (args.length>=1) {
    sourcePath = args[0] || ''
  } else {
    console.warn(`[xeira] lint: no params passed, so linting the whole package folder. npx xeira lint [.].`)
  }

  await xeiraLint(pkgPath, sourcePath)
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
