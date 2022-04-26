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
const { rollupBundle } = require('./rollup')


async function xeiraBundle(pkgPath) {

  // get xeira config
  const xeiraConfig = getXeiraConfigObj(pkgPath);
  
  if (xeiraConfig.bundleWithRollup) {
    await rollupBundle(pkgPath, xeiraConfig)
  } else {
    console.warn('[xeira] bundle: bundler not specified or not implement yet')
  }
}


(async () => {

  const pkgPath= process.env.PWD;

  await xeiraBundle(pkgPath)
  
})().catch((error) => {
  const {bundleHelp} = require('../help/actions')
  const pkgPath= process.env.PWD;
  process.exitCode = 1;
  bundleHelp(pkgPath, error)
});

