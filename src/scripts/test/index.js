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
const {testWithMocha} = require('./mocha');


(async () => {

  const pkgPath= process.env.PWD;

  // get xeira config
  const xeiraConfig = getXeiraConfigObj(pkgPath);  

  const args = process.argv.slice(2);
  let testPath= xeiraConfig.testFolder
  if (args.length>=1) {
    if (args[0]) {
      testPath = args[0]
    }
  }

  await testWithMocha(pkgPath, xeiraConfig, testPath)

})().catch((error) => {
  const {testHelp} = require('../help/actions')
  const pkgPath= process.env.PWD;
  process.exitCode = 1;
  testHelp(pkgPath, error)
});
