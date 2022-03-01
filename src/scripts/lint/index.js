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

const { getXeiraConfig } = require('../../utils/config');
const {lintWithEslint} = require('./eslint');

(async () => {

  const pkgPath= process.env.PWD;

  const args = process.argv.slice(2);
  let sourcePath= ''
  if (args.length>=1) {
    sourcePath = args[0] || ''
  } else {
    console.warn(`[xeira] lint: no params passed, so linting the whole package folder. npx xeira lint [.].`)
  }

  // get xeira config
  const xeiraConfig = getXeiraConfig(pkgPath);

  if (xeiraConfig.lintWithEslint) {
    await lintWithEslint(pkgPath, xeiraConfig, sourcePath)
  } else {
    console.warn(`[xeira] lint: no linter specified in xeira settings.`)
  }

  
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
