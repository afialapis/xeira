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

const {writeFile, access} = require('fs/promises');
const os = require('os');
const path = require('path');
const prompts = require('prompts');
const getBabelConfig = require('../compile/babel.config');
const getEslintConfig = require('../lint/eslint.config');

const pkgPath= process.env.PWD


/*
 * About monorepos
 *   => If true, then the other options are package-level.
 *   => How to handle that?
 */

let xeiraDefaultConfig= {
  // Probably offering alternatives some day
  linter: 'eslint',
  compiler: 'babel',
  minifier: 'uglify', // None ?
  bundler: 'rollup', // 'webpack',

  product: 'package', // 'app',
  target: 'node', // 'browser', 'all',
  react: false,

  // This can be previously tried to be guessed (/packages or .pnpm-workspace.yaml),
  // if not, ask anyway
  monorepo: false,

}


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

async function saveFileSafe(filename, content) {
  try {
    await access(filename)

    const questions= [{
      type: 'confirm',
      name: 'overwrite',
      message: `${path.basename(filename)} already exists. Do you wanrt to overwrite it?`,
      initial: false      
    }]

    const answers = await prompts(questions)

    if (answers.overwrite !== true) {
      return
    }
  } catch(e) {}

  await writeFile(
    filename,
    content
  )
}

function objectToJson(config) {
  return JSON.stringify(config, null, 2) + os.EOL
}
function objectToJs(config) {
  return `module.exports = ${objectToJson(config)}`
}


(async () => {

  const configAnswers = await prompts(configQuestions); 

  const xeiraConfig = {
    ...xeiraDefaultConfig,
    ...configAnswers
  };

  const xeiraConfigName = path.join(pkgPath, 'xeira.json');

  const eslintConfig = getEslintConfig(xeiraConfig);
  const eslintConfigName = path.join(pkgPath, '.eslintrc.js');

  const babelConfig = getBabelConfig(xeiraConfig);
  const babelConfigName = path.join(pkgPath, '.babelrc');

  await saveFileSafe(xeiraConfigName, objectToJson(xeiraConfig));
  await saveFileSafe(eslintConfigName, objectToJs(eslintConfig));
  await saveFileSafe(babelConfigName, objectToJson(babelConfig));

})();
