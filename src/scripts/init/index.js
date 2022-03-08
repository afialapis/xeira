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
  throw err
});

const path = require('path');
const prompts = require('prompts');
const {saveObjectToJsonWithConfirm} = require('../../utils/io')
const {pkgJsonRead, pkgJsonUpdate} = require('../../utils/pkgJson')
const {getXeiraDefaultConfig, getXeiraConfigObj} = require('../../config/xeira')
const configQuestions = require('./questions')
const pkgPath= process.env.PWD

/*
 * About monorepos
 *   => If true, then the other options are package-level.
 *   => How to handle that?
 */

async function xeiraInit() {
  // Prompt questions
  const configAnswers = await prompts(configQuestions); 

  // Prepare xeira config data
  const xeiraConfigData = {
    ...getXeiraDefaultConfig(),
    ...configAnswers
  }

  // Save xeira config data
  const xeiraConfigName = path.join(pkgPath, 'xeira.json')
  await saveObjectToJsonWithConfirm(xeiraConfigName, xeiraConfigData, true)

  // Prepare xeira config object
  const xeiraConfig = getXeiraConfigObj(xeiraConfigData)

  // Update package.json
  const pkgJson = pkgJsonRead(pkgPath)
  const pkgJsonValues= xeiraConfig.makePkgJsonValues(pkgJson.name)
  await pkgJsonUpdate (pkgPath, pkgJsonValues)
}


(async () => {
  await xeiraInit()
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
