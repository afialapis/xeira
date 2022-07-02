/**
 * t-bundle-common-react v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import * as react from 'react';
import * as farrapaCollections from 'farrapa-collections';

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

var require$$0 = /*@__PURE__*/getAugmentedNamespace(react);

var require$$1 = /*@__PURE__*/getAugmentedNamespace(farrapaCollections);

function fooit$1(obj) {
  obj.foo = 'bar';
  return obj;
}

var foo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fooit: fooit$1
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(foo);

var React = require$$0;

var {
  collTotalBy
} = require$$1;

var {
  fooit
} = require$$2;

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

var getMoney = () => {
  var total = collTotalBy(collections, 'money');
  return total;
};

var MoneyDiv = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "money-div"
  }, getMoney());
};

var src = {
  MoneyDiv
};

export { src as default };
//# sourceMappingURL=t-bundle-common-react.mjs.map
