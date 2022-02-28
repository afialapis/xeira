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

const fs = require('fs');
const os = require('os');
const path = require('path');
const prompts = require('prompts');

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
  bundler: 'rollup', // 'webpack',

  product: 'package', // 'app',
  target: 'node', // 'browser', 'all',
  react: false,

  // This can be previously tried to be guessed (/packages or .pnpm-workspace.yaml),
  // if not, ask anyway
  monorepo: false,

}


const questions = [
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

(async () => {

  const answers = await prompts(questions); 

  const xeiraConfig = {
    ...xeiraDefaultConfig,
    ...answers
  }

  fs.writeFileSync(
    path.join(pkgPath, 'xeira.json'),
    JSON.stringify(xeiraConfig, null, 2) + os.EOL
  );  

})();
