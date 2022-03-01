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
const prompts = require('prompts');
const {saveObjectToJsonSafe, saveObjectToJsSafe} = require('../../utils/io')
const {getXeiraDefaultConfig} = require('../../defaults/xeira')
const {getBabelConfig} = require('../../defaults/babel');
const {getEslintConfig} = require('../../defaults/eslint');

const pkgPath= process.env.PWD


/*
 * About monorepos
 *   => If true, then the other options are package-level.
 *   => How to handle that?
 */

const configQuestions = [
  {
    type: 'select',
    name: 'product',
    message: 'Which product are you shipping?',
    choices: [
      { title: 'package', value: 'package' },
      { title: 'app', value: 'app'},
      { title: 'others', value: 'other', disabled: true },
    ],
    initial: 0
  },
  
  {
    type: 'select',
    name: 'target',
    message: 'Which is yourtarget?',
    choices: [
      { title: 'node', value: 'node' },
      { title: 'browser', value: 'browser'},
      { title: 'both', value: 'both'},
    ],
    initial: 0
  },

  {
    type: 'confirm',
    name: 'react',
    message: 'Are you going to work with React?',
    initial: false
  },

  {
    type: 'confirm',
    name: 'monorepo',
    message: 'Are you starting a monorepo?',
    initial: false
  }
];

async function xeiraInit() {
  const configAnswers = await prompts(configQuestions); 

  const xeiraConfig = {
    ...getXeiraDefaultConfig(),
    ...configAnswers
  };

  const xeiraConfigName = path.join(pkgPath, 'xeira.json');

  const eslintConfig = getEslintConfig(xeiraConfig);
  const eslintConfigName = path.join(pkgPath, '.eslintrc.js');

  const babelConfig = getBabelConfig(xeiraConfig);
  const babelConfigName = path.join(pkgPath, '.babelrc');

  await saveObjectToJsonSafe(xeiraConfigName, xeiraConfig);
  await saveObjectToJsSafe(eslintConfigName, eslintConfig);
  await saveObjectToJsonSafe(babelConfigName, babelConfig);
}


(async () => {
  await xeiraInit()
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
