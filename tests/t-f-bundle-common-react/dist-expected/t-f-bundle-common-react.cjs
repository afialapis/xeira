/**
 * t-f-bundle-common-react v0.0.1
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
/* eslint-disable */ 
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var trangallada = require('trangallada');

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

var react__namespace = /*#__PURE__*/_interopNamespaceDefault(react);
var trangallada__namespace = /*#__PURE__*/_interopNamespaceDefault(trangallada);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch {}
			if (isInstance) {
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

var require$$0 = /*@__PURE__*/getAugmentedNamespace(react__namespace);

var require$$1 = /*@__PURE__*/getAugmentedNamespace(trangallada__namespace);

function fooit(obj) {
  obj.foo = 'bar';
  return obj;
}

var foo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fooit: fooit
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(foo);

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	var React = require$$0;
	var _require = require$$1,
	  collTotalBy = _require.collTotalBy;
	var _require2 = require$$2,
	  fooit = _require2.fooit;
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
	var MoneyDiv = function MoneyDiv() {
	  return /*#__PURE__*/React.createElement("div", {
	    "data-testid": "money-div"
	  }, getMoney());
	};
	src = {
	  MoneyDiv: MoneyDiv
	};
	return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

exports.default = index;
