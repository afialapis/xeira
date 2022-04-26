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

const { getXeiraConfigObj } = require('../../config/xeira');
const { transpileWithBabel } = require('./babel');
const { noTranspile } = require('./notranspile');
const { minimifyWithUglify } = require('./uglify');


async function xeiraTranspile(pkgPath, sourcePath, destPath) {
  
  // get xeira config
  const xeiraConfig = getXeiraConfigObj(pkgPath);

  // minifier callback
  const minimifyCallback = (code) => {
    if (xeiraConfig.minifyWithUglify) {
      return minimifyWithUglify(xeiraConfig, code)
    }
    return code
  }
  
  if (xeiraConfig.transpileWithBabel) {
    await transpileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback)
  } else {
    await noTranspile(pkgPath, sourcePath, destPath, minimifyCallback)
  }
}


(async () => {

  const pkgPath= process.env.PWD;

  const args = process.argv.slice(2);
  let sourcePath= 'src'
  let destPath = 'lib'
  if (args.length==2) {
    sourcePath = args[0] || 'src'
    destPath = args[1] || 'lib'
  } else {
    console.warn(`[xeira] transpile: no params passed, so taking defaults. npx xeira transpile [src] [lib].`)
  }

  await xeiraTranspile(pkgPath, sourcePath, destPath)
})().catch((error) => {
  const {transpileHelp} = require('../help/actions')
  const pkgPath= process.env.PWD;
  process.exitCode = 1;
  transpileHelp(pkgPath, error)
});

