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
const { compileWithBabel } = require('./babel');
const { noCompile } = require('./nocompile');
const { minimifyWithUglify } = require('./uglify');


async function xeiraCompile(pkgPath, sourcePath, destPath) {
  
  // get xeira config
  const xeiraConfig = getXeiraConfigObj(pkgPath);

  // minifier callback
  const minimifyCallback = (code) => {
    if (xeiraConfig.minifyWithUglify) {
      return minimifyWithUglify(xeiraConfig, code)
    }
    return code
  }
  
  if (xeiraConfig.compileWithBabel) {
    await compileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback)
  } else {
    await noCompile(pkgPath, sourcePath, destPath, minimifyCallback)
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
    console.warn(`[xeira] compile: no params passed, so taking defaults. npx xeira compile [src] [lib].`)
  }

  await xeiraCompile(pkgPath, sourcePath, destPath)
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});

