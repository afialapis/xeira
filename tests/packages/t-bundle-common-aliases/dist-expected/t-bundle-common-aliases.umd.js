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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('farrapa-collections')) :
	typeof define === 'function' && define.amd ? define(['exports', 'farrapa-collections'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tBundleCommonAliases = {}, global.farrapaCollections));
})(this, (function (exports, farrapaCollections) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var farrapaCollections__namespace = /*#__PURE__*/_interopNamespace(farrapaCollections);

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

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(farrapaCollections__namespace);

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

	exports["default"] = src;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=t-bundle-common-aliases.umd.js.map
