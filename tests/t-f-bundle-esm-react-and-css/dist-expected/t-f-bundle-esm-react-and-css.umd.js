/**
 * t-f-bundle-esm-react-and-css v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('trangallada')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'trangallada'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tFBundleEsmReactAndCss = {}, global.react, global.trangallada));
})(this, (function (exports, React, trangallada) { 'use strict';

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
    var total = trangallada.collTotalBy(collections, 'money');
    return total;
  };
  var MoneyDiv = function MoneyDiv() {
    return /*#__PURE__*/React.createElement("div", {
      "data-testid": "money-div",
      className: "main-red"
    }, getMoney());
  };

  exports.MoneyDiv = MoneyDiv;

}));
//# sourceMappingURL=t-f-bundle-esm-react-and-css.umd.js.map
