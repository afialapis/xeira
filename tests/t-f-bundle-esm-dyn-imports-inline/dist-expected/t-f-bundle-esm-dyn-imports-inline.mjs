/**
 * t-f-bundle-esm-dyn-imports-inline v0.0.1
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
import { collTotalBy } from 'trangallada';

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

var makeCollections = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var {
      fooit
    } = yield Promise.resolve().then(function () { return foo; });
    return [fooit({
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
  });
  return function makeCollections() {
    return _ref.apply(this, arguments);
  };
}();
var getMoney = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    var collections = yield makeCollections();
    var total = collTotalBy(collections, 'money');
    return total;
  });
  return function getMoney() {
    return _ref2.apply(this, arguments);
  };
}();

function fooit(obj) {
  obj.foo = 'bar';
  return obj;
}

var foo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fooit: fooit
});

export { getMoney };
//# sourceMappingURL=t-f-bundle-esm-dyn-imports-inline.mjs.map
