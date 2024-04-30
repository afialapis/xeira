/**
 * t-f-bundle-common-aliases v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import * as trangallada from 'trangallada';

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

var {
  collTotalBy
} = require$$0;
var {
  fooit
} = foo;
var {
  barit
} = require$$2;
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
var getMoney = () => {
  var total = collTotalBy(collections, 'money');
  return total;
};
var src = {
  getMoney
};

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

export { index as default };
//# sourceMappingURL=t-f-bundle-common-aliases.mjs.map
