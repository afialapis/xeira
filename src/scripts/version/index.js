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

(async () => {

  const {getXeiraConfigObj} = require('../../config/xeira')
  const versioning = require('./versioning')

  const pkgPath= process.env.PWD;
  
  // get args
  const args = process.argv.slice(2);

  let versionType= '', filterPattern= ''
  if (args.length>=1) {
    versionType = args[0] || ''

    if (args.length>1) {
      if (args[1]=='-filter') {
        filterPattern= args[2]
      } else {
        throw Error('Invalid filtering parameters')
      }
    }

  } else {
    throw Error('Invalid number of parameters')
  }

  // get xeira config
  const xeiraConfig = getXeiraConfigObj(pkgPath)

  // do the versioning
  await versioning(pkgPath, xeiraConfig, versionType, filterPattern)
  
})().catch((error) => {
  process.exitCode = 1;
  const msg= `[xeira] version: error ${error.message}. 
  Usage:
  
  > npx xeira version patch|minor|major|0.1.2

  If you are in a monorepo:

  > npx xeira version patch|minor|major|0.1.2 [-filter <pattern>]
  `
  console.error(msg)
});
