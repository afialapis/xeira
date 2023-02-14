/**
 * t-bundle-common-aliases v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import * as trangallada from 'trangallada';

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var require$$0 = /*@__PURE__*/getAugmentedNamespace(trangallada);

function fooit$1(obj) {
  obj.foo = 'bar';
  return obj;
}
var foo = {
  fooit: fooit$1
};

function barit$1(obj) {
  obj.bar = 'foo';
  return obj;
}

var bar = /*#__PURE__*/Object.freeze({
	__proto__: null,
	barit: barit$1
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(bar);

var _require = require$$0,
  collTotalBy = _require.collTotalBy;
var _require2 = foo,
  fooit = _require2.fooit;
var _require3 = require$$2,
  barit = _require3.barit;
var collections = [fooit({
  'id': 1,
  'name': 'Max Power',
  'age': 37,
  'money': 99.99
}), barit({
  'id': 2,
  'name': 'Min Weak',
  'age': 25,
  'money': 33.33
})];
var getMoney = function getMoney() {
  var total = collTotalBy(collections, 'money');
  return total;
};
var src = {
  getMoney: getMoney
};

export { src as default };
