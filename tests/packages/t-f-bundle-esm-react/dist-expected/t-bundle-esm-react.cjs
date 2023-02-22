/**
 * t-f-bundle-esm-react v0.0.1
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

var React = require('react');
var trangallada = require('trangallada');

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
  var total = trangallada.collTotalBy(collections, 'money');
  return total;
};
var MoneyDiv = function MoneyDiv() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    id: "money-div"
  }, getMoney());
};

exports.MoneyDiv = MoneyDiv;
