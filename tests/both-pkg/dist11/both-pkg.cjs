/**
 * both-pkg v0.0.0
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var farrapaCollections = require('farrapa-collections');

function fooit(obj) {
  obj.foo= 'bar';
}

const collections= [
  fooit({
    'id': 1,
    'name': 'Max Power',
    'age': 37,
    'money': 99.99
  }),
  fooit({
    'id': 2,
    'name': 'Min Weak',
    'age': 25,
    'money': 33.33
  })  
];

const bothPkg = (f) => {
  const total= farrapaCollections.collTotalBy(collections, 'money');
  console.log(`Total money => ${total}`);
};

exports.bothPkg = bothPkg;
