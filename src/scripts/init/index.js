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
const {saveObjectToJsonWithConfirm} = require('../../utils/io')
const {pkgJsonUpdate} = require('../../utils/pkgJson')
const {getXeiraDefaultConfig} = require('../../config/xeira')
const {getBabelConfigPath} = require('../../config/babel');
const {getEslintConfigPath} = require('../../config/eslint');

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
    message: 'Which kind of product are you shipping?',
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
    message: 'Which is its target environment?',
    choices: [
      { title: 'node', value: 'node' },
      { title: 'browser', value: 'browser'},
      { title: 'both', value: 'both'},
    ],
    initial: 0
  },
  
  {
    type: 'select',
    name: 'linter',
    message: 'Which linter will you use?',
    choices: [
      { title: 'eslint', value: 'eslint' },
      { title: 'none', value: 'none', disabled: true},
    ],
    initial: 0
  },

  {
    type: 'select',
    name: 'compiler',
    message: 'What about the compiler?',
    choices: [
      { title: 'babel', value: 'babel' },
      { title: 'none', value: 'none'},
    ],
    initial: 0
  },  

  {
    type: 'select',
    name: 'bundler',
    message: 'Which bundler will do the magic for you?',
    choices: [
      { title: 'rollup', value: 'rollup' },
      { title: 'none', value: 'none', disabled: true},
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
  },  
];

async function xeiraInit() {
  const configAnswers = await prompts(configQuestions); 

  const xeiraConfig = {
    ...getXeiraDefaultConfig(),
    ...configAnswers
  };

  const xeiraConfigName = path.join(pkgPath, 'xeira.json');
  await saveObjectToJsonWithConfirm(xeiraConfigName, xeiraConfig, true);

  if (xeiraConfig.linter == 'eslint') {
    const eslintConfigPath = getEslintConfigPath(xeiraConfig);
    await pkgJsonUpdate (pkgPath, 'eslintConfig', {"extends": [eslintConfigPath]})
  }

  if (xeiraConfig.compiler == 'babel') {
    const babelConfigPath = getBabelConfigPath(xeiraConfig);
    await pkgJsonUpdate (pkgPath, 'babel', {"extends": babelConfigPath})
  }
}


(async () => {
  await xeiraInit()
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
