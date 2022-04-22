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
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('farrapa-collections')) :
  typeof define === 'function' && define.amd ? define(['exports', 'farrapa-collections'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bothPkg = {}, global.farrapaCollections));
})(this, (function (exports, farrapaCollections) { 'use strict';

  function fooit(obj) {
    obj.foo = 'bar';
  }

  var collections = [fooit({
    'id': 1,
    'name': 'Max Power',
    'age': 37,
    'money': 99.99
  }), fooit({
    'id': 2,
    'name': 'Min Weak',
    'age': 25,
    'money': 33.33
  })];

  var bothPkg = function bothPkg(f) {
    var total = farrapaCollections.collTotalBy(collections, 'money');
    console.log("Total money => " + total);
  };

  exports.bothPkg = bothPkg;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=both-pkg.umd.js.map
