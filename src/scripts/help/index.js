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
   //const pkgPath= process.env.PWD;

   const {globalHelp} = require('../help/actions')
   globalHelp()
   
 })().catch((error) => {
  const {helpHelp} = require('../help/actions')
  const pkgPath= process.env.PWD;
  process.exitCode = 1;
  helpHelp(pkgPath, error)
 });
 