/**
 * t-f-bundle-common v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tFBundleCommon = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var trangallada = {};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$8 = Array.isArray;

	var isArray_1 = isArray$8;

	var isArray$7 = isArray_1;

	/**
	 * Casts `value` as an array if it's not one.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.4.0
	 * @category Lang
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast array.
	 * @example
	 *
	 * _.castArray(1);
	 * // => [1]
	 *
	 * _.castArray({ 'a': 1 });
	 * // => [{ 'a': 1 }]
	 *
	 * _.castArray('abc');
	 * // => ['abc']
	 *
	 * _.castArray(null);
	 * // => [null]
	 *
	 * _.castArray(undefined);
	 * // => [undefined]
	 *
	 * _.castArray();
	 * // => []
	 *
	 * var array = [1, 2, 3];
	 * console.log(_.castArray(array) === array);
	 * // => true
	 */
	function castArray() {
	  if (!arguments.length) {
	    return [];
	  }
	  var value = arguments[0];
	  return isArray$7(value) ? value : [value];
	}

	var castArray_1 = castArray;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$3(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$3;

	var eq$2 = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq$2(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$4(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;

	var _ListCache = ListCache$4;

	var ListCache$3 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$3;
	  this.size = 0;
	}

	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas$1;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$9 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$9;

	var root$8 = _root;

	/** Built-in value references. */
	var Symbol$6 = root$8.Symbol;

	var _Symbol = Symbol$6;

	var Symbol$5 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$g = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$d = objectProto$g.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$g.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$d.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$f = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$f.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$4 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$e(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$e;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$7(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$7;

	var baseGetTag$d = _baseGetTag,
	    isObject$6 = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$3(value) {
	  if (!isObject$6(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$d(value);
	  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$3;

	var root$7 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$2 = root$7['__core-js_shared__'];

	var _coreJsData = coreJsData$2;

	var coreJsData$1 = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$2 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$2;

	var isFunction$2 = isFunction_1,
	    isMasked = _isMasked,
	    isObject$5 = isObject_1,
	    toSource$1 = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$e = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$e.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$2(value) {
	  if (!isObject$5(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}

	var _baseIsNative = baseIsNative$2;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$1;

	var baseIsNative$1 = _baseIsNative,
	    getValue = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$7(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative$1(value) ? value : undefined;
	}

	var _getNative = getNative$7;

	var getNative$6 = _getNative,
	    root$6 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$3 = getNative$6(root$6, 'Map');

	var _Map = Map$3;

	var getNative$5 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$5(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$d.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$b.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$c.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$a.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	var Hash = _Hash,
	    ListCache$2 = _ListCache,
	    Map$2 = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$2 || ListCache$2),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$2(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$2.prototype.clear = mapCacheClear;
	MapCache$2.prototype['delete'] = mapCacheDelete;
	MapCache$2.prototype.get = mapCacheGet;
	MapCache$2.prototype.has = mapCacheHas;
	MapCache$2.prototype.set = mapCacheSet;

	var _MapCache = MapCache$2;

	var ListCache$1 = _ListCache,
	    Map$1 = _Map,
	    MapCache$1 = _MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$1) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$1(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet$1;

	var ListCache = _ListCache,
	    stackClear = _stackClear,
	    stackDelete = _stackDelete,
	    stackGet = _stackGet,
	    stackHas = _stackHas,
	    stackSet = _stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$3(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$3.prototype.clear = stackClear;
	Stack$3.prototype['delete'] = stackDelete;
	Stack$3.prototype.get = stackGet;
	Stack$3.prototype.has = stackHas;
	Stack$3.prototype.set = stackSet;

	var _Stack = Stack$3;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */

	function arrayEach$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach$1;

	var getNative$4 = _getNative;

	var defineProperty$1 = (function() {
	  try {
	    var func = getNative$4(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty$1;

	var defineProperty = _defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue$2(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue$2;

	var baseAssignValue$1 = _baseAssignValue,
	    eq$1 = eq_1;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue$2(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$9.call(object, key) && eq$1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue$1(object, key, value);
	  }
	}

	var _assignValue = assignValue$2;

	var assignValue$1 = _assignValue,
	    baseAssignValue = _baseAssignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject$5(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue$1(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject$5;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes$1;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$j(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$j;

	var baseGetTag$c = _baseGetTag,
	    isObjectLike$i = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$i(value) && baseGetTag$c(value) == argsTag$3;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$h = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$h(value) && hasOwnProperty$8.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	var isArguments_1 = isArguments$2;

	var isBuffer$4 = {exports: {}};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */

	function stubFalse$1() {
	  return false;
	}

	var stubFalse_1 = stubFalse$1;

	isBuffer$4.exports;

	(function (module, exports) {
		var root = _root,
		    stubFalse = stubFalse_1;

		/** Detect free variable `exports`. */
		var freeExports = exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;

		module.exports = isBuffer; 
	} (isBuffer$4, isBuffer$4.exports));

	var isBufferExports = isBuffer$4.exports;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$3 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$1(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$3 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$1;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$2 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$2(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
	}

	var isLength_1 = isLength$2;

	var baseGetTag$b = _baseGetTag,
	    isLength$1 = isLength_1,
	    isObjectLike$g = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$4 = '[object Boolean]',
	    dateTag$4 = '[object Date]',
	    errorTag$3 = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag$7 = '[object Map]',
	    numberTag$4 = '[object Number]',
	    objectTag$4 = '[object Object]',
	    regexpTag$4 = '[object RegExp]',
	    setTag$7 = '[object Set]',
	    stringTag$4 = '[object String]',
	    weakMapTag$3 = '[object WeakMap]';

	var arrayBufferTag$4 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
	typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
	typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
	typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
	typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
	typedArrayTags[arrayBufferTag$4] = typedArrayTags[boolTag$4] =
	typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$4] =
	typedArrayTags[errorTag$3] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$7] = typedArrayTags[numberTag$4] =
	typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$4] =
	typedArrayTags[setTag$7] = typedArrayTags[stringTag$4] =
	typedArrayTags[weakMapTag$3] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$g(value) &&
	    isLength$1(value.length) && !!typedArrayTags[baseGetTag$b(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$6(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$6;

	var _nodeUtil = {exports: {}};

	_nodeUtil.exports;

	(function (module, exports) {
		var freeGlobal = _freeGlobal;

		/** Detect free variable `exports`. */
		var freeExports = exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    // Use `util.types` for Node.js 10+.
		    var types = freeModule && freeModule.require && freeModule.require('util').types;

		    if (types) {
		      return types;
		    }

		    // Legacy `process.binding('util')` for Node.js < 10.
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());

		module.exports = nodeUtil; 
	} (_nodeUtil, _nodeUtil.exports));

	var _nodeUtilExports = _nodeUtil.exports;

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary$5 = _baseUnary,
	    nodeUtil$5 = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil$5 && nodeUtil$5.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$3 = nodeIsTypedArray ? baseUnary$5(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$3;

	var baseTimes = _baseTimes,
	    isArguments$1 = isArguments_1,
	    isArray$6 = isArray_1,
	    isBuffer$3 = isBufferExports,
	    isIndex = _isIndex,
	    isTypedArray$2 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$2(value, inherited) {
	  var isArr = isArray$6(value),
	      isArg = !isArr && isArguments$1(value),
	      isBuff = !isArr && !isArg && isBuffer$3(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$2;

	/** Used for built-in method references. */

	var objectProto$8 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$4(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

	  return value === proto;
	}

	var _isPrototype = isPrototype$4;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	function overArg$2(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg$2;

	var overArg$1 = _overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg$1(Object.keys, Object);

	var _nativeKeys = nativeKeys$1;

	var isPrototype$3 = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$2(object) {
	  if (!isPrototype$3(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$2;

	var isFunction$1 = isFunction_1,
	    isLength = isLength_1;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$5(value) {
	  return value != null && isLength(value.length) && !isFunction$1(value);
	}

	var isArrayLike_1 = isArrayLike$5;

	var arrayLikeKeys$1 = _arrayLikeKeys,
	    baseKeys$1 = _baseKeys,
	    isArrayLike$4 = isArrayLike_1;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$6(object) {
	  return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys$1(object);
	}

	var keys_1 = keys$6;

	var copyObject$4 = _copyObject,
	    keys$5 = keys_1;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign$1(object, source) {
	  return object && copyObject$4(source, keys$5(source), object);
	}

	var _baseAssign = baseAssign$1;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function nativeKeysIn$1(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn$1;

	var isObject$4 = isObject_1,
	    isPrototype$2 = _isPrototype,
	    nativeKeysIn = _nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn$1(object) {
	  if (!isObject$4(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype$2(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn$1;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeysIn = _baseKeysIn,
	    isArrayLike$3 = isArrayLike_1;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$4(object) {
	  return isArrayLike$3(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	var keysIn_1 = keysIn$4;

	var copyObject$3 = _copyObject,
	    keysIn$3 = keysIn_1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn$1(object, source) {
	  return object && copyObject$3(source, keysIn$3(source), object);
	}

	var _baseAssignIn = baseAssignIn$1;

	var _cloneBuffer = {exports: {}};

	_cloneBuffer.exports;

	(function (module, exports) {
		var root = _root;

		/** Detect free variable `exports`. */
		var freeExports = exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined,
		    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

		/**
		 * Creates a clone of  `buffer`.
		 *
		 * @private
		 * @param {Buffer} buffer The buffer to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Buffer} Returns the cloned buffer.
		 */
		function cloneBuffer(buffer, isDeep) {
		  if (isDeep) {
		    return buffer.slice();
		  }
		  var length = buffer.length,
		      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

		  buffer.copy(result);
		  return result;
		}

		module.exports = cloneBuffer; 
	} (_cloneBuffer, _cloneBuffer.exports));

	var _cloneBufferExports = _cloneBuffer.exports;

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */

	function copyArray$2(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray$2;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	function arrayFilter$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */

	function stubArray$2() {
	  return [];
	}

	var stubArray_1 = stubArray$2;

	var arrayFilter = _arrayFilter,
	    stubArray$1 = stubArray_1;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols$3;

	var copyObject$2 = _copyObject,
	    getSymbols$2 = _getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols$1(source, object) {
	  return copyObject$2(source, getSymbols$2(source), object);
	}

	var _copySymbols = copySymbols$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	function arrayPush$2(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush$2;

	var overArg = _overArg;

	/** Built-in value references. */
	var getPrototype$3 = overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype$3;

	var arrayPush$1 = _arrayPush,
	    getPrototype$2 = _getPrototype,
	    getSymbols$1 = _getSymbols,
	    stubArray = stubArray_1;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush$1(result, getSymbols$1(object));
	    object = getPrototype$2(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn$2;

	var copyObject$1 = _copyObject,
	    getSymbolsIn$1 = _getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn$1(source, object) {
	  return copyObject$1(source, getSymbolsIn$1(source), object);
	}

	var _copySymbolsIn = copySymbolsIn$1;

	var arrayPush = _arrayPush,
	    isArray$5 = isArray_1;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray$5(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys$2;

	var baseGetAllKeys$1 = _baseGetAllKeys,
	    getSymbols = _getSymbols,
	    keys$4 = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$2(object) {
	  return baseGetAllKeys$1(object, keys$4, getSymbols);
	}

	var _getAllKeys = getAllKeys$2;

	var baseGetAllKeys = _baseGetAllKeys,
	    getSymbolsIn = _getSymbolsIn,
	    keysIn$2 = keysIn_1;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn$1(object) {
	  return baseGetAllKeys(object, keysIn$2, getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn$1;

	var getNative$3 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$5, 'DataView');

	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$4 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$2(root$4, 'Promise');

	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$1 = getNative$1(root$3, 'Set');

	var _Set = Set$1;

	var getNative = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative(root$2, 'WeakMap');

	var _WeakMap = WeakMap$1;

	var DataView = _DataView,
	    Map = _Map,
	    Promise$1 = _Promise,
	    Set = _Set,
	    WeakMap = _WeakMap,
	    baseGetTag$a = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag$6 = '[object Map]',
	    objectTag$3 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$6 = '[object Set]',
	    weakMapTag$2 = '[object WeakMap]';

	var dataViewTag$3 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$7 = baseGetTag$a;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$7(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
	    (Map && getTag$7(new Map) != mapTag$6) ||
	    (Promise$1 && getTag$7(Promise$1.resolve()) != promiseTag) ||
	    (Set && getTag$7(new Set) != setTag$6) ||
	    (WeakMap && getTag$7(new WeakMap) != weakMapTag$2)) {
	  getTag$7 = function(value) {
	    var result = baseGetTag$a(value),
	        Ctor = result == objectTag$3 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$3;
	        case mapCtorString: return mapTag$6;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$6;
	        case weakMapCtorString: return weakMapTag$2;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$7;

	/** Used for built-in method references. */

	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray$1(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$4.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray$1;

	var root$1 = _root;

	/** Built-in value references. */
	var Uint8Array$2 = root$1.Uint8Array;

	var _Uint8Array = Uint8Array$2;

	var Uint8Array$1 = _Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer$3(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer$3;

	var cloneArrayBuffer$2 = _cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView$1(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView$1;

	/** Used to match `RegExp` flags from their coerced string values. */

	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp$1(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp$1;

	var Symbol$3 = _Symbol;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : undefined,
	    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol$1(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol$1;

	var cloneArrayBuffer$1 = _cloneArrayBuffer;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray$1(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray$1;

	var cloneArrayBuffer = _cloneArrayBuffer,
	    cloneDataView = _cloneDataView,
	    cloneRegExp = _cloneRegExp,
	    cloneSymbol = _cloneSymbol,
	    cloneTypedArray = _cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$3 = '[object Symbol]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag$1(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$3:
	      return cloneArrayBuffer(object);

	    case boolTag$3:
	    case dateTag$3:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return cloneTypedArray(object, isDeep);

	    case mapTag$5:
	      return new Ctor;

	    case numberTag$3:
	    case stringTag$3:
	      return new Ctor(object);

	    case regexpTag$3:
	      return cloneRegExp(object);

	    case setTag$5:
	      return new Ctor;

	    case symbolTag$3:
	      return cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag$1;

	var isObject$3 = isObject_1;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate$1 = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject$3(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate$1;

	var baseCreate = _baseCreate,
	    getPrototype$1 = _getPrototype,
	    isPrototype$1 = _isPrototype;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject$1(object) {
	  return (typeof object.constructor == 'function' && !isPrototype$1(object))
	    ? baseCreate(getPrototype$1(object))
	    : {};
	}

	var _initCloneObject = initCloneObject$1;

	var getTag$6 = _getTag,
	    isObjectLike$f = isObjectLike_1;

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap$1(value) {
	  return isObjectLike$f(value) && getTag$6(value) == mapTag$4;
	}

	var _baseIsMap = baseIsMap$1;

	var baseIsMap = _baseIsMap,
	    baseUnary$4 = _baseUnary,
	    nodeUtil$4 = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil$4 && nodeUtil$4.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap$1 = nodeIsMap ? baseUnary$4(nodeIsMap) : baseIsMap;

	var isMap_1 = isMap$1;

	var getTag$5 = _getTag,
	    isObjectLike$e = isObjectLike_1;

	/** `Object#toString` result references. */
	var setTag$4 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet$1(value) {
	  return isObjectLike$e(value) && getTag$5(value) == setTag$4;
	}

	var _baseIsSet = baseIsSet$1;

	var baseIsSet = _baseIsSet,
	    baseUnary$3 = _baseUnary,
	    nodeUtil$3 = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil$3 && nodeUtil$3.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet$1 = nodeIsSet ? baseUnary$3(nodeIsSet) : baseIsSet;

	var isSet_1 = isSet$1;

	var Stack$2 = _Stack,
	    arrayEach = _arrayEach,
	    assignValue = _assignValue,
	    baseAssign = _baseAssign,
	    baseAssignIn = _baseAssignIn,
	    cloneBuffer = _cloneBufferExports,
	    copyArray$1 = _copyArray,
	    copySymbols = _copySymbols,
	    copySymbolsIn = _copySymbolsIn,
	    getAllKeys$1 = _getAllKeys,
	    getAllKeysIn = _getAllKeysIn,
	    getTag$4 = _getTag,
	    initCloneArray = _initCloneArray,
	    initCloneByTag = _initCloneByTag,
	    initCloneObject = _initCloneObject,
	    isArray$4 = isArray_1,
	    isBuffer$2 = isBufferExports,
	    isMap = isMap_1,
	    isObject$2 = isObject_1,
	    isSet = isSet_1,
	    keys$3 = keys_1,
	    keysIn$1 = keysIn_1;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$2 = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG$4 = 4;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$1 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$1] =
	cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag$3] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$3] =
	cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag$2] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag$1] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone$4(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG$2,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG$4;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject$2(value)) {
	    return value;
	  }
	  var isArr = isArray$4(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray$1(value, result);
	    }
	  } else {
	    var tag = getTag$4(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer$2(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$2 || tag == argsTag$1 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack$2);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone$4(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone$4(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys$1)
	    : (isFlat ? keysIn$1 : keys$3);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone$4(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone$4;

	var baseClone$3 = _baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG$3 = 4;

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone$3(value, CLONE_SYMBOLS_FLAG$3);
	}

	var clone_1 = clone;

	var baseClone$2 = _baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$2 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone$2(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$2);
	}

	var cloneDeep_1 = cloneDeep;

	var baseClone$1 = _baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.cloneWith` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.cloneWith
	 * @example
	 *
	 * function customizer(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(true);
	 *   }
	 * }
	 *
	 * var el = _.cloneDeepWith(document.body, customizer);
	 *
	 * console.log(el === document.body);
	 * // => false
	 * console.log(el.nodeName);
	 * // => 'BODY'
	 * console.log(el.childNodes.length);
	 * // => 20
	 */
	function cloneDeepWith(value, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  return baseClone$1(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG$1, customizer);
	}

	var cloneDeepWith_1 = cloneDeepWith;

	var baseClone = _baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it accepts `customizer` which
	 * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	 * cloning is handled by the method instead. The `customizer` is invoked with
	 * up to four arguments; (value [, index|key, object, stack]).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeepWith
	 * @example
	 *
	 * function customizer(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(false);
	 *   }
	 * }
	 *
	 * var el = _.cloneWith(document.body, customizer);
	 *
	 * console.log(el === document.body);
	 * // => false
	 * console.log(el.nodeName);
	 * // => 'BODY'
	 * console.log(el.childNodes.length);
	 * // => 0
	 */
	function cloneWith(value, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
	}

	var cloneWith_1 = cloneWith;

	/**
	 * The base implementation of `_.conformsTo` which accepts `props` to check.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property predicates to conform to.
	 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	 */

	function baseConformsTo$1(object, source, props) {
	  var length = props.length;
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (length--) {
	    var key = props[length],
	        predicate = source[key],
	        value = object[key];

	    if ((value === undefined && !(key in object)) || !predicate(value)) {
	      return false;
	    }
	  }
	  return true;
	}

	var _baseConformsTo = baseConformsTo$1;

	var baseConformsTo = _baseConformsTo,
	    keys$2 = keys_1;

	/**
	 * Checks if `object` conforms to `source` by invoking the predicate
	 * properties of `source` with the corresponding property values of `object`.
	 *
	 * **Note:** This method is equivalent to `_.conforms` when `source` is
	 * partially applied.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.14.0
	 * @category Lang
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property predicates to conform to.
	 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 *
	 * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	 * // => true
	 *
	 * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	 * // => false
	 */
	function conformsTo(object, source) {
	  return source == null || baseConformsTo(object, source, keys$2(source));
	}

	var conformsTo_1 = conformsTo;

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */

	function baseGt$1(value, other) {
	  return value > other;
	}

	var _baseGt = baseGt$1;

	/** Used to match a single whitespace character. */

	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex$1(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim$1(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim$1;

	var baseGetTag$9 = _baseGetTag,
	    isObjectLike$d = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$2(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$d(value) && baseGetTag$9(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol$2;

	var baseTrim = _baseTrim,
	    isObject$1 = isObject_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber$3(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol$1(value)) {
	    return NAN;
	  }
	  if (isObject$1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber$3;

	var toNumber$2 = toNumber_1;

	/**
	 * Creates a function that performs a relational operation on two values.
	 *
	 * @private
	 * @param {Function} operator The function to perform the operation.
	 * @returns {Function} Returns the new relational operation function.
	 */
	function createRelationalOperation$4(operator) {
	  return function(value, other) {
	    if (!(typeof value == 'string' && typeof other == 'string')) {
	      value = toNumber$2(value);
	      other = toNumber$2(other);
	    }
	    return operator(value, other);
	  };
	}

	var _createRelationalOperation = createRelationalOperation$4;

	var baseGt = _baseGt,
	    createRelationalOperation$3 = _createRelationalOperation;

	/**
	 * Checks if `value` is greater than `other`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.9.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 * @see _.lt
	 * @example
	 *
	 * _.gt(3, 1);
	 * // => true
	 *
	 * _.gt(3, 3);
	 * // => false
	 *
	 * _.gt(1, 3);
	 * // => false
	 */
	var gt = createRelationalOperation$3(baseGt);

	var gt_1 = gt;

	var createRelationalOperation$2 = _createRelationalOperation;

	/**
	 * Checks if `value` is greater than or equal to `other`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.9.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than or equal to
	 *  `other`, else `false`.
	 * @see _.lte
	 * @example
	 *
	 * _.gte(3, 1);
	 * // => true
	 *
	 * _.gte(3, 3);
	 * // => true
	 *
	 * _.gte(1, 3);
	 * // => false
	 */
	var gte = createRelationalOperation$2(function(value, other) {
	  return value >= other;
	});

	var gte_1 = gte;

	var baseGetTag$8 = _baseGetTag,
	    isObjectLike$c = isObjectLike_1;

	var arrayBufferTag$1 = '[object ArrayBuffer]';

	/**
	 * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	 */
	function baseIsArrayBuffer$1(value) {
	  return isObjectLike$c(value) && baseGetTag$8(value) == arrayBufferTag$1;
	}

	var _baseIsArrayBuffer = baseIsArrayBuffer$1;

	var baseIsArrayBuffer = _baseIsArrayBuffer,
	    baseUnary$2 = _baseUnary,
	    nodeUtil$2 = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsArrayBuffer = nodeUtil$2 && nodeUtil$2.isArrayBuffer;

	/**
	 * Checks if `value` is classified as an `ArrayBuffer` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	 * @example
	 *
	 * _.isArrayBuffer(new ArrayBuffer(2));
	 * // => true
	 *
	 * _.isArrayBuffer(new Array(2));
	 * // => false
	 */
	var isArrayBuffer = nodeIsArrayBuffer ? baseUnary$2(nodeIsArrayBuffer) : baseIsArrayBuffer;

	var isArrayBuffer_1 = isArrayBuffer;

	var isArrayLike$2 = isArrayLike_1,
	    isObjectLike$b = isObjectLike_1;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike$b(value) && isArrayLike$2(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject;

	var baseGetTag$7 = _baseGetTag,
	    isObjectLike$a = isObjectLike_1;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike$a(value) && baseGetTag$7(value) == boolTag$1);
	}

	var isBoolean_1 = isBoolean;

	var baseGetTag$6 = _baseGetTag,
	    isObjectLike$9 = isObjectLike_1;

	/** `Object#toString` result references. */
	var dateTag$1 = '[object Date]';

	/**
	 * The base implementation of `_.isDate` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	 */
	function baseIsDate$1(value) {
	  return isObjectLike$9(value) && baseGetTag$6(value) == dateTag$1;
	}

	var _baseIsDate = baseIsDate$1;

	var baseIsDate = _baseIsDate,
	    baseUnary$1 = _baseUnary,
	    nodeUtil$1 = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsDate = nodeUtil$1 && nodeUtil$1.isDate;

	/**
	 * Checks if `value` is classified as a `Date` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	 * @example
	 *
	 * _.isDate(new Date);
	 * // => true
	 *
	 * _.isDate('Mon April 23 2012');
	 * // => false
	 */
	var isDate = nodeIsDate ? baseUnary$1(nodeIsDate) : baseIsDate;

	var isDate_1 = isDate;

	var baseGetTag$5 = _baseGetTag,
	    getPrototype = _getPrototype,
	    isObjectLike$8 = isObjectLike_1;

	/** `Object#toString` result references. */
	var objectTag$1 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$3 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject$2(value) {
	  if (!isObjectLike$8(value) || baseGetTag$5(value) != objectTag$1) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject$2;

	var isObjectLike$7 = isObjectLike_1,
	    isPlainObject$1 = isPlainObject_1;

	/**
	 * Checks if `value` is likely a DOM element.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	 * @example
	 *
	 * _.isElement(document.body);
	 * // => true
	 *
	 * _.isElement('<body>');
	 * // => false
	 */
	function isElement(value) {
	  return isObjectLike$7(value) && value.nodeType === 1 && !isPlainObject$1(value);
	}

	var isElement_1 = isElement;

	var baseKeys = _baseKeys,
	    getTag$3 = _getTag,
	    isArguments = isArguments_1,
	    isArray$3 = isArray_1,
	    isArrayLike$1 = isArrayLike_1,
	    isBuffer$1 = isBufferExports,
	    isPrototype = _isPrototype,
	    isTypedArray$1 = isTypedArray_1;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    setTag$2 = '[object Set]';

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike$1(value) &&
	      (isArray$3(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer$1(value) || isTypedArray$1(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag$3(value);
	  if (tag == mapTag$2 || tag == setTag$2) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty$2.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas$1;

	var MapCache = _MapCache,
	    setCacheAdd = _setCacheAdd,
	    setCacheHas = _setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$1(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
	SetCache$1.prototype.has = setCacheHas;

	var _SetCache = SetCache$1;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */

	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function cacheHas$1(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas$1;

	var SetCache = _SetCache,
	    arraySome = _arraySome,
	    cacheHas = _cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$2) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays$2;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$2(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$2;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	function setToArray$2(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray$2;

	var Symbol$2 = _Symbol,
	    Uint8Array = _Uint8Array,
	    eq = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray$1 = _mapToArray,
	    setToArray$1 = _setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$1:
	      var convert = mapToArray$1;

	    case setTag$1:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3;
	      convert || (convert = setToArray$1);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects$1;

	var Stack$1 = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag$2 = _getTag,
	    isArray$2 = isArray_1,
	    isBuffer = isBufferExports,
	    isTypedArray = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray$2(object),
	      othIsArr = isArray$2(other),
	      objTag = objIsArr ? arrayTag : getTag$2(object),
	      othTag = othIsArr ? arrayTag : getTag$2(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack$1);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$1)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack$1);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack$1);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep,
	    isObjectLike$6 = isObjectLike_1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$3(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike$6(value) && !isObjectLike$6(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$3, stack);
	}

	var _baseIsEqual = baseIsEqual$3;

	var baseIsEqual$2 = _baseIsEqual;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual$2(value, other);
	}

	var isEqual_1 = isEqual;

	var baseIsEqual$1 = _baseIsEqual;

	/**
	 * This method is like `_.isEqual` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with up to
	 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * function isGreeting(value) {
	 *   return /^h(?:i|ello)$/.test(value);
	 * }
	 *
	 * function customizer(objValue, othValue) {
	 *   if (isGreeting(objValue) && isGreeting(othValue)) {
	 *     return true;
	 *   }
	 * }
	 *
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqualWith(array, other, customizer);
	 * // => true
	 */
	function isEqualWith(value, other, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return result === undefined ? baseIsEqual$1(value, other, undefined, customizer) : !!result;
	}

	var isEqualWith_1 = isEqualWith;

	var baseGetTag$4 = _baseGetTag,
	    isObjectLike$5 = isObjectLike_1,
	    isPlainObject = isPlainObject_1;

	/** `Object#toString` result references. */
	var domExcTag = '[object DOMException]',
	    errorTag = '[object Error]';

	/**
	 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	 * `SyntaxError`, `TypeError`, or `URIError` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	 * @example
	 *
	 * _.isError(new Error);
	 * // => true
	 *
	 * _.isError(Error);
	 * // => false
	 */
	function isError(value) {
	  if (!isObjectLike$5(value)) {
	    return false;
	  }
	  var tag = baseGetTag$4(value);
	  return tag == errorTag || tag == domExcTag ||
	    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
	}

	var isError_1 = isError;

	var root = _root;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = root.isFinite;

	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on
	 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(3);
	 * // => true
	 *
	 * _.isFinite(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 *
	 * _.isFinite('3');
	 * // => false
	 */
	function isFinite(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}

	var _isFinite = isFinite;

	var toNumber$1 = toNumber_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite$1(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber$1(value);
	  if (value === INFINITY || value === -Infinity) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite$1;

	var toFinite = toFinite_1;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger$3(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger$3;

	var toInteger$2 = toInteger_1;

	/**
	 * Checks if `value` is an integer.
	 *
	 * **Note:** This method is based on
	 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	 * @example
	 *
	 * _.isInteger(3);
	 * // => true
	 *
	 * _.isInteger(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isInteger(Infinity);
	 * // => false
	 *
	 * _.isInteger('3');
	 * // => false
	 */
	function isInteger$1(value) {
	  return typeof value == 'number' && value == toInteger$2(value);
	}

	var isInteger_1 = isInteger$1;

	var Stack = _Stack,
	    baseIsEqual = _baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch$2(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch$2;

	var isObject = isObject_1;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable$1(value) {
	  return value === value && !isObject(value);
	}

	var _isStrictComparable = isStrictComparable$1;

	var isStrictComparable = _isStrictComparable,
	    keys$1 = keys_1;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData$2(object) {
	  var result = keys$1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData$2;

	var baseIsMatch$1 = _baseIsMatch,
	    getMatchData$1 = _getMatchData;

	/**
	 * Performs a partial deep comparison between `object` and `source` to
	 * determine if `object` contains equivalent property values.
	 *
	 * **Note:** This method is equivalent to `_.matches` when `source` is
	 * partially applied.
	 *
	 * Partial comparisons will match empty array and empty object `source`
	 * values against any array or object value, respectively. See `_.isEqual`
	 * for a list of supported value comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 *
	 * _.isMatch(object, { 'b': 2 });
	 * // => true
	 *
	 * _.isMatch(object, { 'b': 1 });
	 * // => false
	 */
	function isMatch(object, source) {
	  return object === source || baseIsMatch$1(object, source, getMatchData$1(source));
	}

	var isMatch_1 = isMatch;

	var baseIsMatch = _baseIsMatch,
	    getMatchData = _getMatchData;

	/**
	 * This method is like `_.isMatch` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with five
	 * arguments: (objValue, srcValue, index|key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 * @example
	 *
	 * function isGreeting(value) {
	 *   return /^h(?:i|ello)$/.test(value);
	 * }
	 *
	 * function customizer(objValue, srcValue) {
	 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	 *     return true;
	 *   }
	 * }
	 *
	 * var object = { 'greeting': 'hello' };
	 * var source = { 'greeting': 'hi' };
	 *
	 * _.isMatchWith(object, source, customizer);
	 * // => true
	 */
	function isMatchWith(object, source, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  return baseIsMatch(object, source, getMatchData(source), customizer);
	}

	var isMatchWith_1 = isMatchWith;

	var baseGetTag$3 = _baseGetTag,
	    isObjectLike$4 = isObjectLike_1;

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber$1(value) {
	  return typeof value == 'number' ||
	    (isObjectLike$4(value) && baseGetTag$3(value) == numberTag);
	}

	var isNumber_1 = isNumber$1;

	var isNumber = isNumber_1;

	/**
	 * Checks if `value` is `NaN`.
	 *
	 * **Note:** This method is based on
	 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	 * `undefined` and other non-number values.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 * @example
	 *
	 * _.isNaN(NaN);
	 * // => true
	 *
	 * _.isNaN(new Number(NaN));
	 * // => true
	 *
	 * isNaN(undefined);
	 * // => true
	 *
	 * _.isNaN(undefined);
	 * // => false
	 */
	function isNaN(value) {
	  // An `NaN` primitive is the only value that is not equal to itself.
	  // Perform the `toStringTag` check first to avoid errors with some
	  // ActiveX objects in IE.
	  return isNumber(value) && value != +value;
	}

	var _isNaN = isNaN;

	var coreJsData = _coreJsData,
	    isFunction = isFunction_1,
	    stubFalse = stubFalse_1;

	/**
	 * Checks if `func` is capable of being masked.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	 */
	var isMaskable$1 = coreJsData ? isFunction : stubFalse;

	var _isMaskable = isMaskable$1;

	var baseIsNative = _baseIsNative,
	    isMaskable = _isMaskable;

	/** Error message constants. */
	var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

	/**
	 * Checks if `value` is a pristine native function.
	 *
	 * **Note:** This method can't reliably detect native functions in the presence
	 * of the core-js package because core-js circumvents this kind of detection.
	 * Despite multiple requests, the core-js maintainer has made it clear: any
	 * attempt to fix the detection will be obstructed. As a result, we're left
	 * with little choice but to throw an error. Unfortunately, this also affects
	 * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	 * which rely on core-js.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (isMaskable(value)) {
	    throw new Error(CORE_ERROR_TEXT);
	  }
	  return baseIsNative(value);
	}

	var isNative_1 = isNative;

	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */

	function isNil(value) {
	  return value == null;
	}

	var isNil_1 = isNil;

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */

	function isNull(value) {
	  return value === null;
	}

	var isNull_1 = isNull;

	var baseGetTag$2 = _baseGetTag,
	    isObjectLike$3 = isObjectLike_1;

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp$1(value) {
	  return isObjectLike$3(value) && baseGetTag$2(value) == regexpTag;
	}

	var _baseIsRegExp = baseIsRegExp$1;

	var baseIsRegExp = _baseIsRegExp,
	    baseUnary = _baseUnary,
	    nodeUtil = _nodeUtilExports;

	/* Node.js helper references. */
	var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

	var isRegExp_1 = isRegExp;

	var isInteger = isInteger_1;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	 * double precision number which isn't the result of a rounded unsafe integer.
	 *
	 * **Note:** This method is based on
	 * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	 * @example
	 *
	 * _.isSafeInteger(3);
	 * // => true
	 *
	 * _.isSafeInteger(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isSafeInteger(Infinity);
	 * // => false
	 *
	 * _.isSafeInteger('3');
	 * // => false
	 */
	function isSafeInteger(value) {
	  return isInteger(value) && value >= -9007199254740991 && value <= MAX_SAFE_INTEGER$1;
	}

	var isSafeInteger_1 = isSafeInteger;

	var baseGetTag$1 = _baseGetTag,
	    isArray$1 = isArray_1,
	    isObjectLike$2 = isObjectLike_1;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString$1(value) {
	  return typeof value == 'string' ||
	    (!isArray$1(value) && isObjectLike$2(value) && baseGetTag$1(value) == stringTag);
	}

	var isString_1 = isString$1;

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */

	function isUndefined(value) {
	  return value === undefined;
	}

	var isUndefined_1 = isUndefined;

	var getTag$1 = _getTag,
	    isObjectLike$1 = isObjectLike_1;

	/** `Object#toString` result references. */
	var weakMapTag = '[object WeakMap]';

	/**
	 * Checks if `value` is classified as a `WeakMap` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	 * @example
	 *
	 * _.isWeakMap(new WeakMap);
	 * // => true
	 *
	 * _.isWeakMap(new Map);
	 * // => false
	 */
	function isWeakMap(value) {
	  return isObjectLike$1(value) && getTag$1(value) == weakMapTag;
	}

	var isWeakMap_1 = isWeakMap;

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var weakSetTag = '[object WeakSet]';

	/**
	 * Checks if `value` is classified as a `WeakSet` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	 * @example
	 *
	 * _.isWeakSet(new WeakSet);
	 * // => true
	 *
	 * _.isWeakSet(new Set);
	 * // => false
	 */
	function isWeakSet(value) {
	  return isObjectLike(value) && baseGetTag(value) == weakSetTag;
	}

	var isWeakSet_1 = isWeakSet;

	/**
	 * The base implementation of `_.lt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 */

	function baseLt$1(value, other) {
	  return value < other;
	}

	var _baseLt = baseLt$1;

	var baseLt = _baseLt,
	    createRelationalOperation$1 = _createRelationalOperation;

	/**
	 * Checks if `value` is less than `other`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.9.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 * @see _.gt
	 * @example
	 *
	 * _.lt(1, 3);
	 * // => true
	 *
	 * _.lt(3, 3);
	 * // => false
	 *
	 * _.lt(3, 1);
	 * // => false
	 */
	var lt = createRelationalOperation$1(baseLt);

	var lt_1 = lt;

	var createRelationalOperation = _createRelationalOperation;

	/**
	 * Checks if `value` is less than or equal to `other`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.9.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than or equal to
	 *  `other`, else `false`.
	 * @see _.gte
	 * @example
	 *
	 * _.lte(1, 3);
	 * // => true
	 *
	 * _.lte(3, 3);
	 * // => true
	 *
	 * _.lte(3, 1);
	 * // => false
	 */
	var lte = createRelationalOperation(function(value, other) {
	  return value <= other;
	});

	var lte_1 = lte;

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */

	function iteratorToArray$1(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	var _iteratorToArray = iteratorToArray$1;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */

	function asciiToArray$1(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode$1(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray$1(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray$1;

	var asciiToArray = _asciiToArray,
	    hasUnicode = _hasUnicode,
	    unicodeToArray = _unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray$1(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	var _stringToArray = stringToArray$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$2(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$2;

	var arrayMap$1 = _arrayMap;

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues$1(object, props) {
	  return arrayMap$1(props, function(key) {
	    return object[key];
	  });
	}

	var _baseValues = baseValues$1;

	var baseValues = _baseValues,
	    keys = keys_1;

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values$1(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}

	var values_1 = values$1;

	var Symbol$1 = _Symbol,
	    copyArray = _copyArray,
	    getTag = _getTag,
	    isArrayLike = isArrayLike_1,
	    isString = isString_1,
	    iteratorToArray = _iteratorToArray,
	    mapToArray = _mapToArray,
	    setToArray = _setToArray,
	    stringToArray = _stringToArray,
	    values = values_1;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Built-in value references. */
	var symIterator = Symbol$1 ? Symbol$1.iterator : undefined;

	/**
	 * Converts `value` to an array.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the converted array.
	 * @example
	 *
	 * _.toArray({ 'a': 1, 'b': 2 });
	 * // => [1, 2]
	 *
	 * _.toArray('abc');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toArray(1);
	 * // => []
	 *
	 * _.toArray(null);
	 * // => []
	 */
	function toArray(value) {
	  if (!value) {
	    return [];
	  }
	  if (isArrayLike(value)) {
	    return isString(value) ? stringToArray(value) : copyArray(value);
	  }
	  if (symIterator && value[symIterator]) {
	    return iteratorToArray(value[symIterator]());
	  }
	  var tag = getTag(value),
	      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

	  return func(value);
	}

	var toArray_1 = toArray;

	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */

	function baseClamp$2(number, lower, upper) {
	  if (number === number) {
	    if (upper !== undefined) {
	      number = number <= upper ? number : upper;
	    }
	    if (lower !== undefined) {
	      number = number >= lower ? number : lower;
	    }
	  }
	  return number;
	}

	var _baseClamp = baseClamp$2;

	var baseClamp$1 = _baseClamp,
	    toInteger$1 = toInteger_1;

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Converts `value` to an integer suitable for use as the length of an
	 * array-like object.
	 *
	 * **Note:** This method is based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toLength(3.2);
	 * // => 3
	 *
	 * _.toLength(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toLength(Infinity);
	 * // => 4294967295
	 *
	 * _.toLength('3.2');
	 * // => 3
	 */
	function toLength(value) {
	  return value ? baseClamp$1(toInteger$1(value), 0, MAX_ARRAY_LENGTH) : 0;
	}

	var toLength_1 = toLength;

	var copyObject = _copyObject,
	    keysIn = keysIn_1;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	var toPlainObject_1 = toPlainObject;

	var baseClamp = _baseClamp,
	    toInteger = toInteger_1;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Converts `value` to a safe integer. A safe integer can be compared and
	 * represented correctly.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toSafeInteger(3.2);
	 * // => 3
	 *
	 * _.toSafeInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toSafeInteger(Infinity);
	 * // => 9007199254740991
	 *
	 * _.toSafeInteger('3.2');
	 * // => 3
	 */
	function toSafeInteger(value) {
	  return value
	    ? baseClamp(toInteger(value), -9007199254740991, MAX_SAFE_INTEGER)
	    : (value === 0 ? value : 0);
	}

	var toSafeInteger_1 = toSafeInteger;

	var Symbol = _Symbol,
	    arrayMap = _arrayMap,
	    isArray = isArray_1,
	    isSymbol = isSymbol_1;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$1) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString;

	var lang = {
	  'castArray': castArray_1,
	  'clone': clone_1,
	  'cloneDeep': cloneDeep_1,
	  'cloneDeepWith': cloneDeepWith_1,
	  'cloneWith': cloneWith_1,
	  'conformsTo': conformsTo_1,
	  'eq': eq_1,
	  'gt': gt_1,
	  'gte': gte_1,
	  'isArguments': isArguments_1,
	  'isArray': isArray_1,
	  'isArrayBuffer': isArrayBuffer_1,
	  'isArrayLike': isArrayLike_1,
	  'isArrayLikeObject': isArrayLikeObject_1,
	  'isBoolean': isBoolean_1,
	  'isBuffer': isBufferExports,
	  'isDate': isDate_1,
	  'isElement': isElement_1,
	  'isEmpty': isEmpty_1,
	  'isEqual': isEqual_1,
	  'isEqualWith': isEqualWith_1,
	  'isError': isError_1,
	  'isFinite': _isFinite,
	  'isFunction': isFunction_1,
	  'isInteger': isInteger_1,
	  'isLength': isLength_1,
	  'isMap': isMap_1,
	  'isMatch': isMatch_1,
	  'isMatchWith': isMatchWith_1,
	  'isNaN': _isNaN,
	  'isNative': isNative_1,
	  'isNil': isNil_1,
	  'isNull': isNull_1,
	  'isNumber': isNumber_1,
	  'isObject': isObject_1,
	  'isObjectLike': isObjectLike_1,
	  'isPlainObject': isPlainObject_1,
	  'isRegExp': isRegExp_1,
	  'isSafeInteger': isSafeInteger_1,
	  'isSet': isSet_1,
	  'isString': isString_1,
	  'isSymbol': isSymbol_1,
	  'isTypedArray': isTypedArray_1,
	  'isUndefined': isUndefined_1,
	  'isWeakMap': isWeakMap_1,
	  'isWeakSet': isWeakSet_1,
	  'lt': lt_1,
	  'lte': lte_1,
	  'toArray': toArray_1,
	  'toFinite': toFinite_1,
	  'toInteger': toInteger_1,
	  'toLength': toLength_1,
	  'toNumber': toNumber_1,
	  'toPlainObject': toPlainObject_1,
	  'toSafeInteger': toSafeInteger_1,
	  'toString': toString_1
	};

	Object.defineProperty(trangallada, '__esModule', { value: true });

	var lodash_lang = lang;

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var lodash_lang__default = /*#__PURE__*/_interopDefaultLegacy(lodash_lang);

	var {
	  toNumber
	} = lodash_lang__default["default"];
	function arrayChunk(myArray, chunk_size) {
	  var results = [];
	  while (myArray.length) {
	    results.push(myArray.splice(0, chunk_size));
	  }
	  return results;
	}
	function arraySum(a) {
	  return a.reduce((x, y) => x + y, 0);
	}
	function arrayRemove(a, element) {
	  var index = a.indexOf(element);
	  if (index > -1) {
	    return a.splice(index, 1);
	  }
	  return [];
	}
	function _deepGet(obj, path) {
	  return path.split('.').reduce(function (prev, curr) {
	    return prev ? prev[curr] : undefined;
	  }, obj || self);
	}
	function collMatches(coll, params) {
	  var fdata = coll.filter(d => {
	    var _pflds = Object.keys(params);
	    var valids = 0;
	    var eqs = 0;
	    for (var idx in _pflds) {
	      var fld = _pflds[idx];
	      if (d[fld] != undefined) {
	        valids += 1;
	        if (d[fld] == params[fld]) {
	          eqs += 1;
	        } else {
	          if (Array.isArray(params[fld])) {
	            if (params[fld].indexOf(d[fld]) >= 0) {
	              eqs += 1;
	            }
	          }
	        }
	      }
	    }
	    return eqs == valids;
	  });
	  return fdata;
	}
	function collSort(coll, by, order) {
	  if (by == undefined) {
	    return coll;
	  }
	  var ft = order == 'desc' ? -1 : 1;
	  return coll.slice().sort(function (a, b) {
	    /*
	    const fa = a[by].toLowerCase(), fb = b[by].toLowerCase()
	    if (fa < fb) //sort string ascending
	      return -1 * ft
	    if (fa > fb)
	      return 1 * ft
	    return 0 //default return value (no sorting)
	    */
	    //return (a[by]-b[by])*ft
	    var av, bv;
	    if (typeof by == 'object') {
	      av = _deepGet(a, by.field);
	      bv = _deepGet(b, by.field);
	      av = by.map[av] || '';
	      bv = by.map[bv] || '';
	    } else if (typeof by == 'function') {
	      av = by(a) || '';
	      bv = by(b) || '';
	    } else {
	      av = _deepGet(a, by);
	      bv = _deepGet(b, by);
	    }
	    if (typeof av == 'string' && typeof bv == 'string') {
	      av = av.toLowerCase();
	      bv = bv.toLowerCase();
	    }
	    if (av < bv)
	      //sort string ascending
	      return -1 * ft;
	    if (av > bv) return 1 * ft;
	    return 0;
	  });
	}

	/*
	https://stackoverflow.com/a/10124053

	(function(){
	  if (typeof Object.defineProperty === 'function'){
	    try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
	  }
	  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

	  function sb(f){
	    for (var i=this.length;i;){
	      var o = this[--i];
	      this[i] = [].concat(f.call(o,o,i),o);
	    }
	    this.sort(function(a,b){
	      for (var i=0,len=a.length;i<len;++i){
	        if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
	      }
	      return 0;
	    });
	    for (var i=this.length;i;){
	      this[--i]=this[i][this[i].length-1];
	    }
	    return this;
	  }
	})();

	*/

	function collMaxBy(coll, fld) {
	  var m = -99999;
	  coll.map(c => {
	    if (c[fld] != undefined) m = Math.max(m, c[fld]);
	  });
	  return coll.find(c => c[fld] == m);
	}
	function collTotalBy$1(arr, field) {
	  var f = parseFloat(0);
	  arr.map(d => {
	    f += toNumber(d[field]);
	  });
	  return f;
	}

	trangallada.arrayChunk = arrayChunk;
	trangallada.arrayRemove = arrayRemove;
	trangallada.arraySum = arraySum;
	trangallada.collMatches = collMatches;
	trangallada.collMaxBy = collMaxBy;
	trangallada.collSort = collSort;
	trangallada.collTotalBy = collTotalBy$1;

	function fooit$1(obj) {
	  obj.foo = 'bar';
	  return obj;
	}
	var foo = {
	  fooit: fooit$1
	};

	var _require = trangallada,
	  collTotalBy = _require.collTotalBy;
	var _require2 = foo,
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
	var src = {
	  getMoney: getMoney
	};

	var index = /*@__PURE__*/getDefaultExportFromCjs(src);

	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=custom-name.umd.bundle.js.map
