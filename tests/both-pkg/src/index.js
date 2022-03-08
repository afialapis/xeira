/**
 * both-pkg v0.0.0
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

/**
 * both-pkg v0.0.0
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

/**
 * both-pkg v0.0.0
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

/**
 * both-pkg v0.0.0
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var src = {};

/**
 * both-pkg v0.0.0
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

Object.defineProperty(src, '__esModule', { value: true });

function objClone(obj) {
  var copy; // Handle the 3 simple types, and null or undefined

  if (null == obj || 'object' != typeof obj) return obj; // Handle Date

  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  } // Handle Array


  if (obj instanceof Array) {
    copy = [];

    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = objClone(obj[i]);
    }

    return copy;
  } // Handle Object


  if (obj instanceof Object) {
    copy = {};

    for (var attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) copy[attr] = objClone(obj[attr]);
    }

    return copy;
  }

  throw new Error('Unable to copy obj! Its type isn\'t supported');
}

function fooit(obj) {
  obj.foo= 'bar';
}

var foo= {
  fooit
};

const bothPkg = (foo$1) => {
  let obj1= {
    he: 'is',
    the: 'painkiller',
    "this": {
      is: 'the',
      'painkiller': 'painkiller'
    }
  };
  let obj2= {
    ...obj1,
    by: {
      'judas': 'priest'
    }
  };
  let obj3= foo.fooit(objClone(obj2));
  console.log(`Called both-pkg's bothPkg() => ${JSON.stringify(obj3)}`);
};

var bothPkg_1 = src.bothPkg = bothPkg;

exports.bothPkg = bothPkg_1;
exports["default"] = src;
}(src));

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

exports["default"] = index;
}(src));

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

exports["default"] = index;
}(src));

var index = /*@__PURE__*/getDefaultExportFromCjs(src);

exports["default"] = index;
