/**
 * t-bundle-esm-react v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('farrapa-collections')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'farrapa-collections'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tBundleEsmReact = {}, global.react, global.farrapaCollections));
})(this, (function (exports, React, farrapaCollections) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
    var total = farrapaCollections.collTotalBy(collections, 'money');
    return total;
  };

  var MoneyDiv = function MoneyDiv() {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      id: "money-div"
    }, getMoney());
  };

  exports.MoneyDiv = MoneyDiv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=t-bundle-esm-react.umd.js.map
