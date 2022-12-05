/**
 * t-bundle-esm v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tBundleEsm = {}));
})(this, (function (exports) { 'use strict';

  function parseNum(n) {
    var f = parseFloat(n);
    if (isNaN(f)) return parseFloat(0);
    return f;
  }

  function collTotalBy(arr, field) {
    var f = parseFloat(0);
    arr.map(d => {
      f += parseNum(d[field]);
    });
    return f;
  }

  function fooit(obj) {
    obj.foo = 'bar';
    return obj;
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
  var getMoney = function getMoney() {
    var total = collTotalBy(collections, 'money');
    return total;
  };

  exports.getMoney = getMoney;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=t-bundle-esm.umd.bundle.js.map
