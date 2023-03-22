/**
 * t-f-bundle-esm-dyn-imports-chunk v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import { collTotalBy } from 'trangallada';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var makeCollections = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var {
      fooit
    } = yield import('./foo-3a04dff0.js');
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

export { getMoney };
//# sourceMappingURL=index.js.map
