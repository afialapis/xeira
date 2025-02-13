/**
 * t-f-bundle-common-aliases v0.0.1
 *
 * 
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('trangallada')) :
	typeof define === 'function' && define.amd ? define(['exports', 'trangallada'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tFBundleCommonAliases = {}, global.trangallada));
})(this, (function (exports, trangallada) { 'use strict';

	function _interopNamespaceDefault(e) {
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
		n.default = e;
		return Object.freeze(n);
	}

	var trangallada__namespace = /*#__PURE__*/_interopNamespaceDefault(trangallada);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
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

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(trangallada__namespace);

	var foo;
	var hasRequiredFoo;

	function requireFoo () {
		if (hasRequiredFoo) return foo;
		hasRequiredFoo = 1;
		function fooit(obj) {
		  obj.foo = 'bar';
		  return obj;
		}
		foo = {
		  fooit: fooit
		};
		return foo;
	}

	function barit(obj) {
	  obj.bar = 'foo';
	  return obj;
	}

	var bar = /*#__PURE__*/Object.freeze({
		__proto__: null,
		barit: barit
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(bar);

	var src;
	var hasRequiredSrc;

	function requireSrc () {
		if (hasRequiredSrc) return src;
		hasRequiredSrc = 1;
		var _require = require$$0,
		  collTotalBy = _require.collTotalBy;
		var _require2 = requireFoo(),
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
		src = {
		  getMoney: getMoney
		};
		return src;
	}

	var srcExports = requireSrc();
	var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=t-f-bundle-common-aliases.umd.js.map
