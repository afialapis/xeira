/**
 * t-f-bundle-esm-react-and-css v0.0.1
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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tFBundleEsmReactAndCss = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
		var B={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
		E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
		H.constructor=G;C(H,E.prototype);H.isPureReactComponent=true;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:true,ref:true,__self:true,__source:true};
		function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
		function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l:case n:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
		a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
		function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
		var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
		react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
		react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
		for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
		react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
		react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
		react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
		return react_production_min;
	}

	var hasRequiredReact;

	function requireReact () {
		if (hasRequiredReact) return react.exports;
		hasRequiredReact = 1;

		{
		  react.exports = requireReact_production_min();
		}
		return react.exports;
	}

	var reactExports = requireReact();
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

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

	var isArray_1;
	var hasRequiredIsArray;

	function requireIsArray () {
		if (hasRequiredIsArray) return isArray_1;
		hasRequiredIsArray = 1;
		var isArray = Array.isArray;

		isArray_1 = isArray;
		return isArray_1;
	}

	var castArray_1;
	var hasRequiredCastArray;

	function requireCastArray () {
		if (hasRequiredCastArray) return castArray_1;
		hasRequiredCastArray = 1;
		var isArray = requireIsArray();

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
		  return isArray(value) ? value : [value];
		}

		castArray_1 = castArray;
		return castArray_1;
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	var _listCacheClear;
	var hasRequired_listCacheClear;

	function require_listCacheClear () {
		if (hasRequired_listCacheClear) return _listCacheClear;
		hasRequired_listCacheClear = 1;
		function listCacheClear() {
		  this.__data__ = [];
		  this.size = 0;
		}

		_listCacheClear = listCacheClear;
		return _listCacheClear;
	}

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

	var eq_1;
	var hasRequiredEq;

	function requireEq () {
		if (hasRequiredEq) return eq_1;
		hasRequiredEq = 1;
		function eq(value, other) {
		  return value === other || (value !== value && other !== other);
		}

		eq_1 = eq;
		return eq_1;
	}

	var _assocIndexOf;
	var hasRequired_assocIndexOf;

	function require_assocIndexOf () {
		if (hasRequired_assocIndexOf) return _assocIndexOf;
		hasRequired_assocIndexOf = 1;
		var eq = requireEq();

		/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function assocIndexOf(array, key) {
		  var length = array.length;
		  while (length--) {
		    if (eq(array[length][0], key)) {
		      return length;
		    }
		  }
		  return -1;
		}

		_assocIndexOf = assocIndexOf;
		return _assocIndexOf;
	}

	var _listCacheDelete;
	var hasRequired_listCacheDelete;

	function require_listCacheDelete () {
		if (hasRequired_listCacheDelete) return _listCacheDelete;
		hasRequired_listCacheDelete = 1;
		var assocIndexOf = require_assocIndexOf();

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
		function listCacheDelete(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);

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

		_listCacheDelete = listCacheDelete;
		return _listCacheDelete;
	}

	var _listCacheGet;
	var hasRequired_listCacheGet;

	function require_listCacheGet () {
		if (hasRequired_listCacheGet) return _listCacheGet;
		hasRequired_listCacheGet = 1;
		var assocIndexOf = require_assocIndexOf();

		/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function listCacheGet(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);

		  return index < 0 ? undefined : data[index][1];
		}

		_listCacheGet = listCacheGet;
		return _listCacheGet;
	}

	var _listCacheHas;
	var hasRequired_listCacheHas;

	function require_listCacheHas () {
		if (hasRequired_listCacheHas) return _listCacheHas;
		hasRequired_listCacheHas = 1;
		var assocIndexOf = require_assocIndexOf();

		/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function listCacheHas(key) {
		  return assocIndexOf(this.__data__, key) > -1;
		}

		_listCacheHas = listCacheHas;
		return _listCacheHas;
	}

	var _listCacheSet;
	var hasRequired_listCacheSet;

	function require_listCacheSet () {
		if (hasRequired_listCacheSet) return _listCacheSet;
		hasRequired_listCacheSet = 1;
		var assocIndexOf = require_assocIndexOf();

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
		function listCacheSet(key, value) {
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

		_listCacheSet = listCacheSet;
		return _listCacheSet;
	}

	var _ListCache;
	var hasRequired_ListCache;

	function require_ListCache () {
		if (hasRequired_ListCache) return _ListCache;
		hasRequired_ListCache = 1;
		var listCacheClear = require_listCacheClear(),
		    listCacheDelete = require_listCacheDelete(),
		    listCacheGet = require_listCacheGet(),
		    listCacheHas = require_listCacheHas(),
		    listCacheSet = require_listCacheSet();

		/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function ListCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		// Add methods to `ListCache`.
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype['delete'] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;

		_ListCache = ListCache;
		return _ListCache;
	}

	var _stackClear;
	var hasRequired_stackClear;

	function require_stackClear () {
		if (hasRequired_stackClear) return _stackClear;
		hasRequired_stackClear = 1;
		var ListCache = require_ListCache();

		/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */
		function stackClear() {
		  this.__data__ = new ListCache;
		  this.size = 0;
		}

		_stackClear = stackClear;
		return _stackClear;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	var _stackDelete;
	var hasRequired_stackDelete;

	function require_stackDelete () {
		if (hasRequired_stackDelete) return _stackDelete;
		hasRequired_stackDelete = 1;
		function stackDelete(key) {
		  var data = this.__data__,
		      result = data['delete'](key);

		  this.size = data.size;
		  return result;
		}

		_stackDelete = stackDelete;
		return _stackDelete;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	var _stackGet;
	var hasRequired_stackGet;

	function require_stackGet () {
		if (hasRequired_stackGet) return _stackGet;
		hasRequired_stackGet = 1;
		function stackGet(key) {
		  return this.__data__.get(key);
		}

		_stackGet = stackGet;
		return _stackGet;
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	var _stackHas;
	var hasRequired_stackHas;

	function require_stackHas () {
		if (hasRequired_stackHas) return _stackHas;
		hasRequired_stackHas = 1;
		function stackHas(key) {
		  return this.__data__.has(key);
		}

		_stackHas = stackHas;
		return _stackHas;
	}

	/** Detect free variable `global` from Node.js. */

	var _freeGlobal;
	var hasRequired_freeGlobal;

	function require_freeGlobal () {
		if (hasRequired_freeGlobal) return _freeGlobal;
		hasRequired_freeGlobal = 1;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

		_freeGlobal = freeGlobal;
		return _freeGlobal;
	}

	var _root;
	var hasRequired_root;

	function require_root () {
		if (hasRequired_root) return _root;
		hasRequired_root = 1;
		var freeGlobal = require_freeGlobal();

		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();

		_root = root;
		return _root;
	}

	var _Symbol;
	var hasRequired_Symbol;

	function require_Symbol () {
		if (hasRequired_Symbol) return _Symbol;
		hasRequired_Symbol = 1;
		var root = require_root();

		/** Built-in value references. */
		var Symbol = root.Symbol;

		_Symbol = Symbol;
		return _Symbol;
	}

	var _getRawTag;
	var hasRequired_getRawTag;

	function require_getRawTag () {
		if (hasRequired_getRawTag) return _getRawTag;
		hasRequired_getRawTag = 1;
		var Symbol = require_Symbol();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
		  var isOwn = hasOwnProperty.call(value, symToStringTag),
		      tag = value[symToStringTag];

		  try {
		    value[symToStringTag] = undefined;
		    var unmasked = true;
		  } catch (e) {}

		  var result = nativeObjectToString.call(value);
		  if (unmasked) {
		    if (isOwn) {
		      value[symToStringTag] = tag;
		    } else {
		      delete value[symToStringTag];
		    }
		  }
		  return result;
		}

		_getRawTag = getRawTag;
		return _getRawTag;
	}

	/** Used for built-in method references. */

	var _objectToString;
	var hasRequired_objectToString;

	function require_objectToString () {
		if (hasRequired_objectToString) return _objectToString;
		hasRequired_objectToString = 1;
		var objectProto = Object.prototype;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
		  return nativeObjectToString.call(value);
		}

		_objectToString = objectToString;
		return _objectToString;
	}

	var _baseGetTag;
	var hasRequired_baseGetTag;

	function require_baseGetTag () {
		if (hasRequired_baseGetTag) return _baseGetTag;
		hasRequired_baseGetTag = 1;
		var Symbol = require_Symbol(),
		    getRawTag = require_getRawTag(),
		    objectToString = require_objectToString();

		/** `Object#toString` result references. */
		var nullTag = '[object Null]',
		    undefinedTag = '[object Undefined]';

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
		  if (value == null) {
		    return value === undefined ? undefinedTag : nullTag;
		  }
		  return (symToStringTag && symToStringTag in Object(value))
		    ? getRawTag(value)
		    : objectToString(value);
		}

		_baseGetTag = baseGetTag;
		return _baseGetTag;
	}

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

	var isObject_1;
	var hasRequiredIsObject;

	function requireIsObject () {
		if (hasRequiredIsObject) return isObject_1;
		hasRequiredIsObject = 1;
		function isObject(value) {
		  var type = typeof value;
		  return value != null && (type == 'object' || type == 'function');
		}

		isObject_1 = isObject;
		return isObject_1;
	}

	var isFunction_1;
	var hasRequiredIsFunction;

	function requireIsFunction () {
		if (hasRequiredIsFunction) return isFunction_1;
		hasRequiredIsFunction = 1;
		var baseGetTag = require_baseGetTag(),
		    isObject = requireIsObject();

		/** `Object#toString` result references. */
		var asyncTag = '[object AsyncFunction]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
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
		function isFunction(value) {
		  if (!isObject(value)) {
		    return false;
		  }
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 9 which returns 'object' for typed arrays and other constructors.
		  var tag = baseGetTag(value);
		  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
		}

		isFunction_1 = isFunction;
		return isFunction_1;
	}

	var _coreJsData;
	var hasRequired_coreJsData;

	function require_coreJsData () {
		if (hasRequired_coreJsData) return _coreJsData;
		hasRequired_coreJsData = 1;
		var root = require_root();

		/** Used to detect overreaching core-js shims. */
		var coreJsData = root['__core-js_shared__'];

		_coreJsData = coreJsData;
		return _coreJsData;
	}

	var _isMasked;
	var hasRequired_isMasked;

	function require_isMasked () {
		if (hasRequired_isMasked) return _isMasked;
		hasRequired_isMasked = 1;
		var coreJsData = require_coreJsData();

		/** Used to detect methods masquerading as native. */
		var maskSrcKey = (function() {
		  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		  return uid ? ('Symbol(src)_1.' + uid) : '';
		}());

		/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */
		function isMasked(func) {
		  return !!maskSrcKey && (maskSrcKey in func);
		}

		_isMasked = isMasked;
		return _isMasked;
	}

	/** Used for built-in method references. */

	var _toSource;
	var hasRequired_toSource;

	function require_toSource () {
		if (hasRequired_toSource) return _toSource;
		hasRequired_toSource = 1;
		var funcProto = Function.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;

		/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to convert.
		 * @returns {string} Returns the source code.
		 */
		function toSource(func) {
		  if (func != null) {
		    try {
		      return funcToString.call(func);
		    } catch (e) {}
		    try {
		      return (func + '');
		    } catch (e) {}
		  }
		  return '';
		}

		_toSource = toSource;
		return _toSource;
	}

	var _baseIsNative;
	var hasRequired_baseIsNative;

	function require_baseIsNative () {
		if (hasRequired_baseIsNative) return _baseIsNative;
		hasRequired_baseIsNative = 1;
		var isFunction = requireIsFunction(),
		    isMasked = require_isMasked(),
		    isObject = requireIsObject(),
		    toSource = require_toSource();

		/**
		 * Used to match `RegExp`
		 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		 */
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

		/** Used to detect host constructors (Safari). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;

		/** Used for built-in method references. */
		var funcProto = Function.prototype,
		    objectProto = Object.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
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
		function baseIsNative(value) {
		  if (!isObject(value) || isMasked(value)) {
		    return false;
		  }
		  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		  return pattern.test(toSource(value));
		}

		_baseIsNative = baseIsNative;
		return _baseIsNative;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	var _getValue;
	var hasRequired_getValue;

	function require_getValue () {
		if (hasRequired_getValue) return _getValue;
		hasRequired_getValue = 1;
		function getValue(object, key) {
		  return object == null ? undefined : object[key];
		}

		_getValue = getValue;
		return _getValue;
	}

	var _getNative;
	var hasRequired_getNative;

	function require_getNative () {
		if (hasRequired_getNative) return _getNative;
		hasRequired_getNative = 1;
		var baseIsNative = require_baseIsNative(),
		    getValue = require_getValue();

		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = getValue(object, key);
		  return baseIsNative(value) ? value : undefined;
		}

		_getNative = getNative;
		return _getNative;
	}

	var _Map;
	var hasRequired_Map;

	function require_Map () {
		if (hasRequired_Map) return _Map;
		hasRequired_Map = 1;
		var getNative = require_getNative(),
		    root = require_root();

		/* Built-in method references that are verified to be native. */
		var Map = getNative(root, 'Map');

		_Map = Map;
		return _Map;
	}

	var _nativeCreate;
	var hasRequired_nativeCreate;

	function require_nativeCreate () {
		if (hasRequired_nativeCreate) return _nativeCreate;
		hasRequired_nativeCreate = 1;
		var getNative = require_getNative();

		/* Built-in method references that are verified to be native. */
		var nativeCreate = getNative(Object, 'create');

		_nativeCreate = nativeCreate;
		return _nativeCreate;
	}

	var _hashClear;
	var hasRequired_hashClear;

	function require_hashClear () {
		if (hasRequired_hashClear) return _hashClear;
		hasRequired_hashClear = 1;
		var nativeCreate = require_nativeCreate();

		/**
		 * Removes all key-value entries from the hash.
		 *
		 * @private
		 * @name clear
		 * @memberOf Hash
		 */
		function hashClear() {
		  this.__data__ = nativeCreate ? nativeCreate(null) : {};
		  this.size = 0;
		}

		_hashClear = hashClear;
		return _hashClear;
	}

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

	var _hashDelete;
	var hasRequired_hashDelete;

	function require_hashDelete () {
		if (hasRequired_hashDelete) return _hashDelete;
		hasRequired_hashDelete = 1;
		function hashDelete(key) {
		  var result = this.has(key) && delete this.__data__[key];
		  this.size -= result ? 1 : 0;
		  return result;
		}

		_hashDelete = hashDelete;
		return _hashDelete;
	}

	var _hashGet;
	var hasRequired_hashGet;

	function require_hashGet () {
		if (hasRequired_hashGet) return _hashGet;
		hasRequired_hashGet = 1;
		var nativeCreate = require_nativeCreate();

		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function hashGet(key) {
		  var data = this.__data__;
		  if (nativeCreate) {
		    var result = data[key];
		    return result === HASH_UNDEFINED ? undefined : result;
		  }
		  return hasOwnProperty.call(data, key) ? data[key] : undefined;
		}

		_hashGet = hashGet;
		return _hashGet;
	}

	var _hashHas;
	var hasRequired_hashHas;

	function require_hashHas () {
		if (hasRequired_hashHas) return _hashHas;
		hasRequired_hashHas = 1;
		var nativeCreate = require_nativeCreate();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function hashHas(key) {
		  var data = this.__data__;
		  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
		}

		_hashHas = hashHas;
		return _hashHas;
	}

	var _hashSet;
	var hasRequired_hashSet;

	function require_hashSet () {
		if (hasRequired_hashSet) return _hashSet;
		hasRequired_hashSet = 1;
		var nativeCreate = require_nativeCreate();

		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';

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
		function hashSet(key, value) {
		  var data = this.__data__;
		  this.size += this.has(key) ? 0 : 1;
		  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		  return this;
		}

		_hashSet = hashSet;
		return _hashSet;
	}

	var _Hash;
	var hasRequired_Hash;

	function require_Hash () {
		if (hasRequired_Hash) return _Hash;
		hasRequired_Hash = 1;
		var hashClear = require_hashClear(),
		    hashDelete = require_hashDelete(),
		    hashGet = require_hashGet(),
		    hashHas = require_hashHas(),
		    hashSet = require_hashSet();

		/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Hash(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		// Add methods to `Hash`.
		Hash.prototype.clear = hashClear;
		Hash.prototype['delete'] = hashDelete;
		Hash.prototype.get = hashGet;
		Hash.prototype.has = hashHas;
		Hash.prototype.set = hashSet;

		_Hash = Hash;
		return _Hash;
	}

	var _mapCacheClear;
	var hasRequired_mapCacheClear;

	function require_mapCacheClear () {
		if (hasRequired_mapCacheClear) return _mapCacheClear;
		hasRequired_mapCacheClear = 1;
		var Hash = require_Hash(),
		    ListCache = require_ListCache(),
		    Map = require_Map();

		/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */
		function mapCacheClear() {
		  this.size = 0;
		  this.__data__ = {
		    'hash': new Hash,
		    'map': new (Map || ListCache),
		    'string': new Hash
		  };
		}

		_mapCacheClear = mapCacheClear;
		return _mapCacheClear;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	var _isKeyable;
	var hasRequired_isKeyable;

	function require_isKeyable () {
		if (hasRequired_isKeyable) return _isKeyable;
		hasRequired_isKeyable = 1;
		function isKeyable(value) {
		  var type = typeof value;
		  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
		    ? (value !== '__proto__')
		    : (value === null);
		}

		_isKeyable = isKeyable;
		return _isKeyable;
	}

	var _getMapData;
	var hasRequired_getMapData;

	function require_getMapData () {
		if (hasRequired_getMapData) return _getMapData;
		hasRequired_getMapData = 1;
		var isKeyable = require_isKeyable();

		/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */
		function getMapData(map, key) {
		  var data = map.__data__;
		  return isKeyable(key)
		    ? data[typeof key == 'string' ? 'string' : 'hash']
		    : data.map;
		}

		_getMapData = getMapData;
		return _getMapData;
	}

	var _mapCacheDelete;
	var hasRequired_mapCacheDelete;

	function require_mapCacheDelete () {
		if (hasRequired_mapCacheDelete) return _mapCacheDelete;
		hasRequired_mapCacheDelete = 1;
		var getMapData = require_getMapData();

		/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function mapCacheDelete(key) {
		  var result = getMapData(this, key)['delete'](key);
		  this.size -= result ? 1 : 0;
		  return result;
		}

		_mapCacheDelete = mapCacheDelete;
		return _mapCacheDelete;
	}

	var _mapCacheGet;
	var hasRequired_mapCacheGet;

	function require_mapCacheGet () {
		if (hasRequired_mapCacheGet) return _mapCacheGet;
		hasRequired_mapCacheGet = 1;
		var getMapData = require_getMapData();

		/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function mapCacheGet(key) {
		  return getMapData(this, key).get(key);
		}

		_mapCacheGet = mapCacheGet;
		return _mapCacheGet;
	}

	var _mapCacheHas;
	var hasRequired_mapCacheHas;

	function require_mapCacheHas () {
		if (hasRequired_mapCacheHas) return _mapCacheHas;
		hasRequired_mapCacheHas = 1;
		var getMapData = require_getMapData();

		/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function mapCacheHas(key) {
		  return getMapData(this, key).has(key);
		}

		_mapCacheHas = mapCacheHas;
		return _mapCacheHas;
	}

	var _mapCacheSet;
	var hasRequired_mapCacheSet;

	function require_mapCacheSet () {
		if (hasRequired_mapCacheSet) return _mapCacheSet;
		hasRequired_mapCacheSet = 1;
		var getMapData = require_getMapData();

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
		function mapCacheSet(key, value) {
		  var data = getMapData(this, key),
		      size = data.size;

		  data.set(key, value);
		  this.size += data.size == size ? 0 : 1;
		  return this;
		}

		_mapCacheSet = mapCacheSet;
		return _mapCacheSet;
	}

	var _MapCache;
	var hasRequired_MapCache;

	function require_MapCache () {
		if (hasRequired_MapCache) return _MapCache;
		hasRequired_MapCache = 1;
		var mapCacheClear = require_mapCacheClear(),
		    mapCacheDelete = require_mapCacheDelete(),
		    mapCacheGet = require_mapCacheGet(),
		    mapCacheHas = require_mapCacheHas(),
		    mapCacheSet = require_mapCacheSet();

		/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function MapCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;

		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}

		// Add methods to `MapCache`.
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype['delete'] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;

		_MapCache = MapCache;
		return _MapCache;
	}

	var _stackSet;
	var hasRequired_stackSet;

	function require_stackSet () {
		if (hasRequired_stackSet) return _stackSet;
		hasRequired_stackSet = 1;
		var ListCache = require_ListCache(),
		    Map = require_Map(),
		    MapCache = require_MapCache();

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
		function stackSet(key, value) {
		  var data = this.__data__;
		  if (data instanceof ListCache) {
		    var pairs = data.__data__;
		    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
		      pairs.push([key, value]);
		      this.size = ++data.size;
		      return this;
		    }
		    data = this.__data__ = new MapCache(pairs);
		  }
		  data.set(key, value);
		  this.size = data.size;
		  return this;
		}

		_stackSet = stackSet;
		return _stackSet;
	}

	var _Stack;
	var hasRequired_Stack;

	function require_Stack () {
		if (hasRequired_Stack) return _Stack;
		hasRequired_Stack = 1;
		var ListCache = require_ListCache(),
		    stackClear = require_stackClear(),
		    stackDelete = require_stackDelete(),
		    stackGet = require_stackGet(),
		    stackHas = require_stackHas(),
		    stackSet = require_stackSet();

		/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Stack(entries) {
		  var data = this.__data__ = new ListCache(entries);
		  this.size = data.size;
		}

		// Add methods to `Stack`.
		Stack.prototype.clear = stackClear;
		Stack.prototype['delete'] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;

		_Stack = Stack;
		return _Stack;
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */

	var _arrayEach;
	var hasRequired_arrayEach;

	function require_arrayEach () {
		if (hasRequired_arrayEach) return _arrayEach;
		hasRequired_arrayEach = 1;
		function arrayEach(array, iteratee) {
		  var index = -1,
		      length = array == null ? 0 : array.length;

		  while (++index < length) {
		    if (iteratee(array[index], index, array) === false) {
		      break;
		    }
		  }
		  return array;
		}

		_arrayEach = arrayEach;
		return _arrayEach;
	}

	var _defineProperty;
	var hasRequired_defineProperty;

	function require_defineProperty () {
		if (hasRequired_defineProperty) return _defineProperty;
		hasRequired_defineProperty = 1;
		var getNative = require_getNative();

		var defineProperty = (function() {
		  try {
		    var func = getNative(Object, 'defineProperty');
		    func({}, '', {});
		    return func;
		  } catch (e) {}
		}());

		_defineProperty = defineProperty;
		return _defineProperty;
	}

	var _baseAssignValue;
	var hasRequired_baseAssignValue;

	function require_baseAssignValue () {
		if (hasRequired_baseAssignValue) return _baseAssignValue;
		hasRequired_baseAssignValue = 1;
		var defineProperty = require_defineProperty();

		/**
		 * The base implementation of `assignValue` and `assignMergeValue` without
		 * value checks.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */
		function baseAssignValue(object, key, value) {
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

		_baseAssignValue = baseAssignValue;
		return _baseAssignValue;
	}

	var _assignValue;
	var hasRequired_assignValue;

	function require_assignValue () {
		if (hasRequired_assignValue) return _assignValue;
		hasRequired_assignValue = 1;
		var baseAssignValue = require_baseAssignValue(),
		    eq = requireEq();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

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
		function assignValue(object, key, value) {
		  var objValue = object[key];
		  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
		      (value === undefined && !(key in object))) {
		    baseAssignValue(object, key, value);
		  }
		}

		_assignValue = assignValue;
		return _assignValue;
	}

	var _copyObject;
	var hasRequired_copyObject;

	function require_copyObject () {
		if (hasRequired_copyObject) return _copyObject;
		hasRequired_copyObject = 1;
		var assignValue = require_assignValue(),
		    baseAssignValue = require_baseAssignValue();

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
		function copyObject(source, props, object, customizer) {
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
		      assignValue(object, key, newValue);
		    }
		  }
		  return object;
		}

		_copyObject = copyObject;
		return _copyObject;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	var _baseTimes;
	var hasRequired_baseTimes;

	function require_baseTimes () {
		if (hasRequired_baseTimes) return _baseTimes;
		hasRequired_baseTimes = 1;
		function baseTimes(n, iteratee) {
		  var index = -1,
		      result = Array(n);

		  while (++index < n) {
		    result[index] = iteratee(index);
		  }
		  return result;
		}

		_baseTimes = baseTimes;
		return _baseTimes;
	}

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

	var isObjectLike_1;
	var hasRequiredIsObjectLike;

	function requireIsObjectLike () {
		if (hasRequiredIsObjectLike) return isObjectLike_1;
		hasRequiredIsObjectLike = 1;
		function isObjectLike(value) {
		  return value != null && typeof value == 'object';
		}

		isObjectLike_1 = isObjectLike;
		return isObjectLike_1;
	}

	var _baseIsArguments;
	var hasRequired_baseIsArguments;

	function require_baseIsArguments () {
		if (hasRequired_baseIsArguments) return _baseIsArguments;
		hasRequired_baseIsArguments = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]';

		/**
		 * The base implementation of `_.isArguments`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 */
		function baseIsArguments(value) {
		  return isObjectLike(value) && baseGetTag(value) == argsTag;
		}

		_baseIsArguments = baseIsArguments;
		return _baseIsArguments;
	}

	var isArguments_1;
	var hasRequiredIsArguments;

	function requireIsArguments () {
		if (hasRequiredIsArguments) return isArguments_1;
		hasRequiredIsArguments = 1;
		var baseIsArguments = require_baseIsArguments(),
		    isObjectLike = requireIsObjectLike();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/** Built-in value references. */
		var propertyIsEnumerable = objectProto.propertyIsEnumerable;

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
		var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
		  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
		    !propertyIsEnumerable.call(value, 'callee');
		};

		isArguments_1 = isArguments;
		return isArguments_1;
	}

	var isBuffer = {exports: {}};

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

	var stubFalse_1;
	var hasRequiredStubFalse;

	function requireStubFalse () {
		if (hasRequiredStubFalse) return stubFalse_1;
		hasRequiredStubFalse = 1;
		function stubFalse() {
		  return false;
		}

		stubFalse_1 = stubFalse;
		return stubFalse_1;
	}

	isBuffer.exports;

	var hasRequiredIsBuffer;

	function requireIsBuffer () {
		if (hasRequiredIsBuffer) return isBuffer.exports;
		hasRequiredIsBuffer = 1;
		(function (module, exports) {
			var root = require_root(),
			    stubFalse = requireStubFalse();

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
		} (isBuffer, isBuffer.exports));
		return isBuffer.exports;
	}

	/** Used as references for various `Number` constants. */

	var _isIndex;
	var hasRequired_isIndex;

	function require_isIndex () {
		if (hasRequired_isIndex) return _isIndex;
		hasRequired_isIndex = 1;
		var MAX_SAFE_INTEGER = 9007199254740991;

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
		function isIndex(value, length) {
		  var type = typeof value;
		  length = length == null ? MAX_SAFE_INTEGER : length;

		  return !!length &&
		    (type == 'number' ||
		      (type != 'symbol' && reIsUint.test(value))) &&
		        (value > -1 && value % 1 == 0 && value < length);
		}

		_isIndex = isIndex;
		return _isIndex;
	}

	/** Used as references for various `Number` constants. */

	var isLength_1;
	var hasRequiredIsLength;

	function requireIsLength () {
		if (hasRequiredIsLength) return isLength_1;
		hasRequiredIsLength = 1;
		var MAX_SAFE_INTEGER = 9007199254740991;

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
		function isLength(value) {
		  return typeof value == 'number' &&
		    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}

		isLength_1 = isLength;
		return isLength_1;
	}

	var _baseIsTypedArray;
	var hasRequired_baseIsTypedArray;

	function require_baseIsTypedArray () {
		if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
		hasRequired_baseIsTypedArray = 1;
		var baseGetTag = require_baseGetTag(),
		    isLength = requireIsLength(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    objectTag = '[object Object]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    weakMapTag = '[object WeakMap]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';

		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
		typedArrayTags[errorTag] = typedArrayTags[funcTag] =
		typedArrayTags[mapTag] = typedArrayTags[numberTag] =
		typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
		typedArrayTags[setTag] = typedArrayTags[stringTag] =
		typedArrayTags[weakMapTag] = false;

		/**
		 * The base implementation of `_.isTypedArray` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 */
		function baseIsTypedArray(value) {
		  return isObjectLike(value) &&
		    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		}

		_baseIsTypedArray = baseIsTypedArray;
		return _baseIsTypedArray;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	var _baseUnary;
	var hasRequired_baseUnary;

	function require_baseUnary () {
		if (hasRequired_baseUnary) return _baseUnary;
		hasRequired_baseUnary = 1;
		function baseUnary(func) {
		  return function(value) {
		    return func(value);
		  };
		}

		_baseUnary = baseUnary;
		return _baseUnary;
	}

	var _nodeUtil = {exports: {}};

	_nodeUtil.exports;

	var hasRequired_nodeUtil;

	function require_nodeUtil () {
		if (hasRequired_nodeUtil) return _nodeUtil.exports;
		hasRequired_nodeUtil = 1;
		(function (module, exports) {
			var freeGlobal = require_freeGlobal();

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
		return _nodeUtil.exports;
	}

	var isTypedArray_1;
	var hasRequiredIsTypedArray;

	function requireIsTypedArray () {
		if (hasRequiredIsTypedArray) return isTypedArray_1;
		hasRequiredIsTypedArray = 1;
		var baseIsTypedArray = require_baseIsTypedArray(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

		/* Node.js helper references. */
		var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

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
		var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

		isTypedArray_1 = isTypedArray;
		return isTypedArray_1;
	}

	var _arrayLikeKeys;
	var hasRequired_arrayLikeKeys;

	function require_arrayLikeKeys () {
		if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
		hasRequired_arrayLikeKeys = 1;
		var baseTimes = require_baseTimes(),
		    isArguments = requireIsArguments(),
		    isArray = requireIsArray(),
		    isBuffer = requireIsBuffer(),
		    isIndex = require_isIndex(),
		    isTypedArray = requireIsTypedArray();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Creates an array of the enumerable property names of the array-like `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @param {boolean} inherited Specify returning inherited property names.
		 * @returns {Array} Returns the array of property names.
		 */
		function arrayLikeKeys(value, inherited) {
		  var isArr = isArray(value),
		      isArg = !isArr && isArguments(value),
		      isBuff = !isArr && !isArg && isBuffer(value),
		      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
		      skipIndexes = isArr || isArg || isBuff || isType,
		      result = skipIndexes ? baseTimes(value.length, String) : [],
		      length = result.length;

		  for (var key in value) {
		    if ((inherited || hasOwnProperty.call(value, key)) &&
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

		_arrayLikeKeys = arrayLikeKeys;
		return _arrayLikeKeys;
	}

	/** Used for built-in method references. */

	var _isPrototype;
	var hasRequired_isPrototype;

	function require_isPrototype () {
		if (hasRequired_isPrototype) return _isPrototype;
		hasRequired_isPrototype = 1;
		var objectProto = Object.prototype;

		/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */
		function isPrototype(value) {
		  var Ctor = value && value.constructor,
		      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

		  return value === proto;
		}

		_isPrototype = isPrototype;
		return _isPrototype;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	var _overArg;
	var hasRequired_overArg;

	function require_overArg () {
		if (hasRequired_overArg) return _overArg;
		hasRequired_overArg = 1;
		function overArg(func, transform) {
		  return function(arg) {
		    return func(transform(arg));
		  };
		}

		_overArg = overArg;
		return _overArg;
	}

	var _nativeKeys;
	var hasRequired_nativeKeys;

	function require_nativeKeys () {
		if (hasRequired_nativeKeys) return _nativeKeys;
		hasRequired_nativeKeys = 1;
		var overArg = require_overArg();

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeKeys = overArg(Object.keys, Object);

		_nativeKeys = nativeKeys;
		return _nativeKeys;
	}

	var _baseKeys;
	var hasRequired_baseKeys;

	function require_baseKeys () {
		if (hasRequired_baseKeys) return _baseKeys;
		hasRequired_baseKeys = 1;
		var isPrototype = require_isPrototype(),
		    nativeKeys = require_nativeKeys();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeys(object) {
		  if (!isPrototype(object)) {
		    return nativeKeys(object);
		  }
		  var result = [];
		  for (var key in Object(object)) {
		    if (hasOwnProperty.call(object, key) && key != 'constructor') {
		      result.push(key);
		    }
		  }
		  return result;
		}

		_baseKeys = baseKeys;
		return _baseKeys;
	}

	var isArrayLike_1;
	var hasRequiredIsArrayLike;

	function requireIsArrayLike () {
		if (hasRequiredIsArrayLike) return isArrayLike_1;
		hasRequiredIsArrayLike = 1;
		var isFunction = requireIsFunction(),
		    isLength = requireIsLength();

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
		function isArrayLike(value) {
		  return value != null && isLength(value.length) && !isFunction(value);
		}

		isArrayLike_1 = isArrayLike;
		return isArrayLike_1;
	}

	var keys_1;
	var hasRequiredKeys;

	function requireKeys () {
		if (hasRequiredKeys) return keys_1;
		hasRequiredKeys = 1;
		var arrayLikeKeys = require_arrayLikeKeys(),
		    baseKeys = require_baseKeys(),
		    isArrayLike = requireIsArrayLike();

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
		function keys(object) {
		  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		}

		keys_1 = keys;
		return keys_1;
	}

	var _baseAssign;
	var hasRequired_baseAssign;

	function require_baseAssign () {
		if (hasRequired_baseAssign) return _baseAssign;
		hasRequired_baseAssign = 1;
		var copyObject = require_copyObject(),
		    keys = requireKeys();

		/**
		 * The base implementation of `_.assign` without support for multiple sources
		 * or `customizer` functions.
		 *
		 * @private
		 * @param {Object} object The destination object.
		 * @param {Object} source The source object.
		 * @returns {Object} Returns `object`.
		 */
		function baseAssign(object, source) {
		  return object && copyObject(source, keys(source), object);
		}

		_baseAssign = baseAssign;
		return _baseAssign;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	var _nativeKeysIn;
	var hasRequired_nativeKeysIn;

	function require_nativeKeysIn () {
		if (hasRequired_nativeKeysIn) return _nativeKeysIn;
		hasRequired_nativeKeysIn = 1;
		function nativeKeysIn(object) {
		  var result = [];
		  if (object != null) {
		    for (var key in Object(object)) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		_nativeKeysIn = nativeKeysIn;
		return _nativeKeysIn;
	}

	var _baseKeysIn;
	var hasRequired_baseKeysIn;

	function require_baseKeysIn () {
		if (hasRequired_baseKeysIn) return _baseKeysIn;
		hasRequired_baseKeysIn = 1;
		var isObject = requireIsObject(),
		    isPrototype = require_isPrototype(),
		    nativeKeysIn = require_nativeKeysIn();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeysIn(object) {
		  if (!isObject(object)) {
		    return nativeKeysIn(object);
		  }
		  var isProto = isPrototype(object),
		      result = [];

		  for (var key in object) {
		    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
		      result.push(key);
		    }
		  }
		  return result;
		}

		_baseKeysIn = baseKeysIn;
		return _baseKeysIn;
	}

	var keysIn_1;
	var hasRequiredKeysIn;

	function requireKeysIn () {
		if (hasRequiredKeysIn) return keysIn_1;
		hasRequiredKeysIn = 1;
		var arrayLikeKeys = require_arrayLikeKeys(),
		    baseKeysIn = require_baseKeysIn(),
		    isArrayLike = requireIsArrayLike();

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
		function keysIn(object) {
		  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
		}

		keysIn_1 = keysIn;
		return keysIn_1;
	}

	var _baseAssignIn;
	var hasRequired_baseAssignIn;

	function require_baseAssignIn () {
		if (hasRequired_baseAssignIn) return _baseAssignIn;
		hasRequired_baseAssignIn = 1;
		var copyObject = require_copyObject(),
		    keysIn = requireKeysIn();

		/**
		 * The base implementation of `_.assignIn` without support for multiple sources
		 * or `customizer` functions.
		 *
		 * @private
		 * @param {Object} object The destination object.
		 * @param {Object} source The source object.
		 * @returns {Object} Returns `object`.
		 */
		function baseAssignIn(object, source) {
		  return object && copyObject(source, keysIn(source), object);
		}

		_baseAssignIn = baseAssignIn;
		return _baseAssignIn;
	}

	var _cloneBuffer = {exports: {}};

	_cloneBuffer.exports;

	var hasRequired_cloneBuffer;

	function require_cloneBuffer () {
		if (hasRequired_cloneBuffer) return _cloneBuffer.exports;
		hasRequired_cloneBuffer = 1;
		(function (module, exports) {
			var root = require_root();

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
		return _cloneBuffer.exports;
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */

	var _copyArray;
	var hasRequired_copyArray;

	function require_copyArray () {
		if (hasRequired_copyArray) return _copyArray;
		hasRequired_copyArray = 1;
		function copyArray(source, array) {
		  var index = -1,
		      length = source.length;

		  array || (array = Array(length));
		  while (++index < length) {
		    array[index] = source[index];
		  }
		  return array;
		}

		_copyArray = copyArray;
		return _copyArray;
	}

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	var _arrayFilter;
	var hasRequired_arrayFilter;

	function require_arrayFilter () {
		if (hasRequired_arrayFilter) return _arrayFilter;
		hasRequired_arrayFilter = 1;
		function arrayFilter(array, predicate) {
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

		_arrayFilter = arrayFilter;
		return _arrayFilter;
	}

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

	var stubArray_1;
	var hasRequiredStubArray;

	function requireStubArray () {
		if (hasRequiredStubArray) return stubArray_1;
		hasRequiredStubArray = 1;
		function stubArray() {
		  return [];
		}

		stubArray_1 = stubArray;
		return stubArray_1;
	}

	var _getSymbols;
	var hasRequired_getSymbols;

	function require_getSymbols () {
		if (hasRequired_getSymbols) return _getSymbols;
		hasRequired_getSymbols = 1;
		var arrayFilter = require_arrayFilter(),
		    stubArray = requireStubArray();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Built-in value references. */
		var propertyIsEnumerable = objectProto.propertyIsEnumerable;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeGetSymbols = Object.getOwnPropertySymbols;

		/**
		 * Creates an array of the own enumerable symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of symbols.
		 */
		var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
		  if (object == null) {
		    return [];
		  }
		  object = Object(object);
		  return arrayFilter(nativeGetSymbols(object), function(symbol) {
		    return propertyIsEnumerable.call(object, symbol);
		  });
		};

		_getSymbols = getSymbols;
		return _getSymbols;
	}

	var _copySymbols;
	var hasRequired_copySymbols;

	function require_copySymbols () {
		if (hasRequired_copySymbols) return _copySymbols;
		hasRequired_copySymbols = 1;
		var copyObject = require_copyObject(),
		    getSymbols = require_getSymbols();

		/**
		 * Copies own symbols of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy symbols from.
		 * @param {Object} [object={}] The object to copy symbols to.
		 * @returns {Object} Returns `object`.
		 */
		function copySymbols(source, object) {
		  return copyObject(source, getSymbols(source), object);
		}

		_copySymbols = copySymbols;
		return _copySymbols;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	var _arrayPush;
	var hasRequired_arrayPush;

	function require_arrayPush () {
		if (hasRequired_arrayPush) return _arrayPush;
		hasRequired_arrayPush = 1;
		function arrayPush(array, values) {
		  var index = -1,
		      length = values.length,
		      offset = array.length;

		  while (++index < length) {
		    array[offset + index] = values[index];
		  }
		  return array;
		}

		_arrayPush = arrayPush;
		return _arrayPush;
	}

	var _getPrototype;
	var hasRequired_getPrototype;

	function require_getPrototype () {
		if (hasRequired_getPrototype) return _getPrototype;
		hasRequired_getPrototype = 1;
		var overArg = require_overArg();

		/** Built-in value references. */
		var getPrototype = overArg(Object.getPrototypeOf, Object);

		_getPrototype = getPrototype;
		return _getPrototype;
	}

	var _getSymbolsIn;
	var hasRequired_getSymbolsIn;

	function require_getSymbolsIn () {
		if (hasRequired_getSymbolsIn) return _getSymbolsIn;
		hasRequired_getSymbolsIn = 1;
		var arrayPush = require_arrayPush(),
		    getPrototype = require_getPrototype(),
		    getSymbols = require_getSymbols(),
		    stubArray = requireStubArray();

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeGetSymbols = Object.getOwnPropertySymbols;

		/**
		 * Creates an array of the own and inherited enumerable symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of symbols.
		 */
		var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
		  var result = [];
		  while (object) {
		    arrayPush(result, getSymbols(object));
		    object = getPrototype(object);
		  }
		  return result;
		};

		_getSymbolsIn = getSymbolsIn;
		return _getSymbolsIn;
	}

	var _copySymbolsIn;
	var hasRequired_copySymbolsIn;

	function require_copySymbolsIn () {
		if (hasRequired_copySymbolsIn) return _copySymbolsIn;
		hasRequired_copySymbolsIn = 1;
		var copyObject = require_copyObject(),
		    getSymbolsIn = require_getSymbolsIn();

		/**
		 * Copies own and inherited symbols of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy symbols from.
		 * @param {Object} [object={}] The object to copy symbols to.
		 * @returns {Object} Returns `object`.
		 */
		function copySymbolsIn(source, object) {
		  return copyObject(source, getSymbolsIn(source), object);
		}

		_copySymbolsIn = copySymbolsIn;
		return _copySymbolsIn;
	}

	var _baseGetAllKeys;
	var hasRequired_baseGetAllKeys;

	function require_baseGetAllKeys () {
		if (hasRequired_baseGetAllKeys) return _baseGetAllKeys;
		hasRequired_baseGetAllKeys = 1;
		var arrayPush = require_arrayPush(),
		    isArray = requireIsArray();

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
		function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		  var result = keysFunc(object);
		  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
		}

		_baseGetAllKeys = baseGetAllKeys;
		return _baseGetAllKeys;
	}

	var _getAllKeys;
	var hasRequired_getAllKeys;

	function require_getAllKeys () {
		if (hasRequired_getAllKeys) return _getAllKeys;
		hasRequired_getAllKeys = 1;
		var baseGetAllKeys = require_baseGetAllKeys(),
		    getSymbols = require_getSymbols(),
		    keys = requireKeys();

		/**
		 * Creates an array of own enumerable property names and symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names and symbols.
		 */
		function getAllKeys(object) {
		  return baseGetAllKeys(object, keys, getSymbols);
		}

		_getAllKeys = getAllKeys;
		return _getAllKeys;
	}

	var _getAllKeysIn;
	var hasRequired_getAllKeysIn;

	function require_getAllKeysIn () {
		if (hasRequired_getAllKeysIn) return _getAllKeysIn;
		hasRequired_getAllKeysIn = 1;
		var baseGetAllKeys = require_baseGetAllKeys(),
		    getSymbolsIn = require_getSymbolsIn(),
		    keysIn = requireKeysIn();

		/**
		 * Creates an array of own and inherited enumerable property names and
		 * symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names and symbols.
		 */
		function getAllKeysIn(object) {
		  return baseGetAllKeys(object, keysIn, getSymbolsIn);
		}

		_getAllKeysIn = getAllKeysIn;
		return _getAllKeysIn;
	}

	var _DataView;
	var hasRequired_DataView;

	function require_DataView () {
		if (hasRequired_DataView) return _DataView;
		hasRequired_DataView = 1;
		var getNative = require_getNative(),
		    root = require_root();

		/* Built-in method references that are verified to be native. */
		var DataView = getNative(root, 'DataView');

		_DataView = DataView;
		return _DataView;
	}

	var _Promise;
	var hasRequired_Promise;

	function require_Promise () {
		if (hasRequired_Promise) return _Promise;
		hasRequired_Promise = 1;
		var getNative = require_getNative(),
		    root = require_root();

		/* Built-in method references that are verified to be native. */
		var Promise = getNative(root, 'Promise');

		_Promise = Promise;
		return _Promise;
	}

	var _Set;
	var hasRequired_Set;

	function require_Set () {
		if (hasRequired_Set) return _Set;
		hasRequired_Set = 1;
		var getNative = require_getNative(),
		    root = require_root();

		/* Built-in method references that are verified to be native. */
		var Set = getNative(root, 'Set');

		_Set = Set;
		return _Set;
	}

	var _WeakMap;
	var hasRequired_WeakMap;

	function require_WeakMap () {
		if (hasRequired_WeakMap) return _WeakMap;
		hasRequired_WeakMap = 1;
		var getNative = require_getNative(),
		    root = require_root();

		/* Built-in method references that are verified to be native. */
		var WeakMap = getNative(root, 'WeakMap');

		_WeakMap = WeakMap;
		return _WeakMap;
	}

	var _getTag;
	var hasRequired_getTag;

	function require_getTag () {
		if (hasRequired_getTag) return _getTag;
		hasRequired_getTag = 1;
		var DataView = require_DataView(),
		    Map = require_Map(),
		    Promise = require_Promise(),
		    Set = require_Set(),
		    WeakMap = require_WeakMap(),
		    baseGetTag = require_baseGetTag(),
		    toSource = require_toSource();

		/** `Object#toString` result references. */
		var mapTag = '[object Map]',
		    objectTag = '[object Object]',
		    promiseTag = '[object Promise]',
		    setTag = '[object Set]',
		    weakMapTag = '[object WeakMap]';

		var dataViewTag = '[object DataView]';

		/** Used to detect maps, sets, and weakmaps. */
		var dataViewCtorString = toSource(DataView),
		    mapCtorString = toSource(Map),
		    promiseCtorString = toSource(Promise),
		    setCtorString = toSource(Set),
		    weakMapCtorString = toSource(WeakMap);

		/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		var getTag = baseGetTag;

		// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
		if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
		    (Map && getTag(new Map) != mapTag) ||
		    (Promise && getTag(Promise.resolve()) != promiseTag) ||
		    (Set && getTag(new Set) != setTag) ||
		    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
		  getTag = function(value) {
		    var result = baseGetTag(value),
		        Ctor = result == objectTag ? value.constructor : undefined,
		        ctorString = Ctor ? toSource(Ctor) : '';

		    if (ctorString) {
		      switch (ctorString) {
		        case dataViewCtorString: return dataViewTag;
		        case mapCtorString: return mapTag;
		        case promiseCtorString: return promiseTag;
		        case setCtorString: return setTag;
		        case weakMapCtorString: return weakMapTag;
		      }
		    }
		    return result;
		  };
		}

		_getTag = getTag;
		return _getTag;
	}

	/** Used for built-in method references. */

	var _initCloneArray;
	var hasRequired_initCloneArray;

	function require_initCloneArray () {
		if (hasRequired_initCloneArray) return _initCloneArray;
		hasRequired_initCloneArray = 1;
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Initializes an array clone.
		 *
		 * @private
		 * @param {Array} array The array to clone.
		 * @returns {Array} Returns the initialized clone.
		 */
		function initCloneArray(array) {
		  var length = array.length,
		      result = new array.constructor(length);

		  // Add properties assigned by `RegExp#exec`.
		  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
		    result.index = array.index;
		    result.input = array.input;
		  }
		  return result;
		}

		_initCloneArray = initCloneArray;
		return _initCloneArray;
	}

	var _Uint8Array;
	var hasRequired_Uint8Array;

	function require_Uint8Array () {
		if (hasRequired_Uint8Array) return _Uint8Array;
		hasRequired_Uint8Array = 1;
		var root = require_root();

		/** Built-in value references. */
		var Uint8Array = root.Uint8Array;

		_Uint8Array = Uint8Array;
		return _Uint8Array;
	}

	var _cloneArrayBuffer;
	var hasRequired_cloneArrayBuffer;

	function require_cloneArrayBuffer () {
		if (hasRequired_cloneArrayBuffer) return _cloneArrayBuffer;
		hasRequired_cloneArrayBuffer = 1;
		var Uint8Array = require_Uint8Array();

		/**
		 * Creates a clone of `arrayBuffer`.
		 *
		 * @private
		 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
		 * @returns {ArrayBuffer} Returns the cloned array buffer.
		 */
		function cloneArrayBuffer(arrayBuffer) {
		  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		  return result;
		}

		_cloneArrayBuffer = cloneArrayBuffer;
		return _cloneArrayBuffer;
	}

	var _cloneDataView;
	var hasRequired_cloneDataView;

	function require_cloneDataView () {
		if (hasRequired_cloneDataView) return _cloneDataView;
		hasRequired_cloneDataView = 1;
		var cloneArrayBuffer = require_cloneArrayBuffer();

		/**
		 * Creates a clone of `dataView`.
		 *
		 * @private
		 * @param {Object} dataView The data view to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned data view.
		 */
		function cloneDataView(dataView, isDeep) {
		  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
		}

		_cloneDataView = cloneDataView;
		return _cloneDataView;
	}

	/** Used to match `RegExp` flags from their coerced string values. */

	var _cloneRegExp;
	var hasRequired_cloneRegExp;

	function require_cloneRegExp () {
		if (hasRequired_cloneRegExp) return _cloneRegExp;
		hasRequired_cloneRegExp = 1;
		var reFlags = /\w*$/;

		/**
		 * Creates a clone of `regexp`.
		 *
		 * @private
		 * @param {Object} regexp The regexp to clone.
		 * @returns {Object} Returns the cloned regexp.
		 */
		function cloneRegExp(regexp) {
		  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		  result.lastIndex = regexp.lastIndex;
		  return result;
		}

		_cloneRegExp = cloneRegExp;
		return _cloneRegExp;
	}

	var _cloneSymbol;
	var hasRequired_cloneSymbol;

	function require_cloneSymbol () {
		if (hasRequired_cloneSymbol) return _cloneSymbol;
		hasRequired_cloneSymbol = 1;
		var Symbol = require_Symbol();

		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : undefined,
		    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

		/**
		 * Creates a clone of the `symbol` object.
		 *
		 * @private
		 * @param {Object} symbol The symbol object to clone.
		 * @returns {Object} Returns the cloned symbol object.
		 */
		function cloneSymbol(symbol) {
		  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
		}

		_cloneSymbol = cloneSymbol;
		return _cloneSymbol;
	}

	var _cloneTypedArray;
	var hasRequired_cloneTypedArray;

	function require_cloneTypedArray () {
		if (hasRequired_cloneTypedArray) return _cloneTypedArray;
		hasRequired_cloneTypedArray = 1;
		var cloneArrayBuffer = require_cloneArrayBuffer();

		/**
		 * Creates a clone of `typedArray`.
		 *
		 * @private
		 * @param {Object} typedArray The typed array to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned typed array.
		 */
		function cloneTypedArray(typedArray, isDeep) {
		  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
		}

		_cloneTypedArray = cloneTypedArray;
		return _cloneTypedArray;
	}

	var _initCloneByTag;
	var hasRequired_initCloneByTag;

	function require_initCloneByTag () {
		if (hasRequired_initCloneByTag) return _initCloneByTag;
		hasRequired_initCloneByTag = 1;
		var cloneArrayBuffer = require_cloneArrayBuffer(),
		    cloneDataView = require_cloneDataView(),
		    cloneRegExp = require_cloneRegExp(),
		    cloneSymbol = require_cloneSymbol(),
		    cloneTypedArray = require_cloneTypedArray();

		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    symbolTag = '[object Symbol]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';

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
		function initCloneByTag(object, tag, isDeep) {
		  var Ctor = object.constructor;
		  switch (tag) {
		    case arrayBufferTag:
		      return cloneArrayBuffer(object);

		    case boolTag:
		    case dateTag:
		      return new Ctor(+object);

		    case dataViewTag:
		      return cloneDataView(object, isDeep);

		    case float32Tag: case float64Tag:
		    case int8Tag: case int16Tag: case int32Tag:
		    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
		      return cloneTypedArray(object, isDeep);

		    case mapTag:
		      return new Ctor;

		    case numberTag:
		    case stringTag:
		      return new Ctor(object);

		    case regexpTag:
		      return cloneRegExp(object);

		    case setTag:
		      return new Ctor;

		    case symbolTag:
		      return cloneSymbol(object);
		  }
		}

		_initCloneByTag = initCloneByTag;
		return _initCloneByTag;
	}

	var _baseCreate;
	var hasRequired_baseCreate;

	function require_baseCreate () {
		if (hasRequired_baseCreate) return _baseCreate;
		hasRequired_baseCreate = 1;
		var isObject = requireIsObject();

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
		var baseCreate = (function() {
		  function object() {}
		  return function(proto) {
		    if (!isObject(proto)) {
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

		_baseCreate = baseCreate;
		return _baseCreate;
	}

	var _initCloneObject;
	var hasRequired_initCloneObject;

	function require_initCloneObject () {
		if (hasRequired_initCloneObject) return _initCloneObject;
		hasRequired_initCloneObject = 1;
		var baseCreate = require_baseCreate(),
		    getPrototype = require_getPrototype(),
		    isPrototype = require_isPrototype();

		/**
		 * Initializes an object clone.
		 *
		 * @private
		 * @param {Object} object The object to clone.
		 * @returns {Object} Returns the initialized clone.
		 */
		function initCloneObject(object) {
		  return (typeof object.constructor == 'function' && !isPrototype(object))
		    ? baseCreate(getPrototype(object))
		    : {};
		}

		_initCloneObject = initCloneObject;
		return _initCloneObject;
	}

	var _baseIsMap;
	var hasRequired_baseIsMap;

	function require_baseIsMap () {
		if (hasRequired_baseIsMap) return _baseIsMap;
		hasRequired_baseIsMap = 1;
		var getTag = require_getTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var mapTag = '[object Map]';

		/**
		 * The base implementation of `_.isMap` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
		 */
		function baseIsMap(value) {
		  return isObjectLike(value) && getTag(value) == mapTag;
		}

		_baseIsMap = baseIsMap;
		return _baseIsMap;
	}

	var isMap_1;
	var hasRequiredIsMap;

	function requireIsMap () {
		if (hasRequiredIsMap) return isMap_1;
		hasRequiredIsMap = 1;
		var baseIsMap = require_baseIsMap(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

		/* Node.js helper references. */
		var nodeIsMap = nodeUtil && nodeUtil.isMap;

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
		var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

		isMap_1 = isMap;
		return isMap_1;
	}

	var _baseIsSet;
	var hasRequired_baseIsSet;

	function require_baseIsSet () {
		if (hasRequired_baseIsSet) return _baseIsSet;
		hasRequired_baseIsSet = 1;
		var getTag = require_getTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var setTag = '[object Set]';

		/**
		 * The base implementation of `_.isSet` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
		 */
		function baseIsSet(value) {
		  return isObjectLike(value) && getTag(value) == setTag;
		}

		_baseIsSet = baseIsSet;
		return _baseIsSet;
	}

	var isSet_1;
	var hasRequiredIsSet;

	function requireIsSet () {
		if (hasRequiredIsSet) return isSet_1;
		hasRequiredIsSet = 1;
		var baseIsSet = require_baseIsSet(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

		/* Node.js helper references. */
		var nodeIsSet = nodeUtil && nodeUtil.isSet;

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
		var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

		isSet_1 = isSet;
		return isSet_1;
	}

	var _baseClone;
	var hasRequired_baseClone;

	function require_baseClone () {
		if (hasRequired_baseClone) return _baseClone;
		hasRequired_baseClone = 1;
		var Stack = require_Stack(),
		    arrayEach = require_arrayEach(),
		    assignValue = require_assignValue(),
		    baseAssign = require_baseAssign(),
		    baseAssignIn = require_baseAssignIn(),
		    cloneBuffer = require_cloneBuffer(),
		    copyArray = require_copyArray(),
		    copySymbols = require_copySymbols(),
		    copySymbolsIn = require_copySymbolsIn(),
		    getAllKeys = require_getAllKeys(),
		    getAllKeysIn = require_getAllKeysIn(),
		    getTag = require_getTag(),
		    initCloneArray = require_initCloneArray(),
		    initCloneByTag = require_initCloneByTag(),
		    initCloneObject = require_initCloneObject(),
		    isArray = requireIsArray(),
		    isBuffer = requireIsBuffer(),
		    isMap = requireIsMap(),
		    isObject = requireIsObject(),
		    isSet = requireIsSet(),
		    keys = requireKeys(),
		    keysIn = requireKeysIn();

		/** Used to compose bitmasks for cloning. */
		var CLONE_DEEP_FLAG = 1,
		    CLONE_FLAT_FLAG = 2,
		    CLONE_SYMBOLS_FLAG = 4;

		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    objectTag = '[object Object]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    symbolTag = '[object Symbol]',
		    weakMapTag = '[object WeakMap]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]',
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
		cloneableTags[argsTag] = cloneableTags[arrayTag] =
		cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
		cloneableTags[boolTag] = cloneableTags[dateTag] =
		cloneableTags[float32Tag] = cloneableTags[float64Tag] =
		cloneableTags[int8Tag] = cloneableTags[int16Tag] =
		cloneableTags[int32Tag] = cloneableTags[mapTag] =
		cloneableTags[numberTag] = cloneableTags[objectTag] =
		cloneableTags[regexpTag] = cloneableTags[setTag] =
		cloneableTags[stringTag] = cloneableTags[symbolTag] =
		cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
		cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
		cloneableTags[errorTag] = cloneableTags[funcTag] =
		cloneableTags[weakMapTag] = false;

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
		function baseClone(value, bitmask, customizer, key, object, stack) {
		  var result,
		      isDeep = bitmask & CLONE_DEEP_FLAG,
		      isFlat = bitmask & CLONE_FLAT_FLAG,
		      isFull = bitmask & CLONE_SYMBOLS_FLAG;

		  if (customizer) {
		    result = object ? customizer(value, key, object, stack) : customizer(value);
		  }
		  if (result !== undefined) {
		    return result;
		  }
		  if (!isObject(value)) {
		    return value;
		  }
		  var isArr = isArray(value);
		  if (isArr) {
		    result = initCloneArray(value);
		    if (!isDeep) {
		      return copyArray(value, result);
		    }
		  } else {
		    var tag = getTag(value),
		        isFunc = tag == funcTag || tag == genTag;

		    if (isBuffer(value)) {
		      return cloneBuffer(value, isDeep);
		    }
		    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
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
		  stack || (stack = new Stack);
		  var stacked = stack.get(value);
		  if (stacked) {
		    return stacked;
		  }
		  stack.set(value, result);

		  if (isSet(value)) {
		    value.forEach(function(subValue) {
		      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
		    });
		  } else if (isMap(value)) {
		    value.forEach(function(subValue, key) {
		      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
		    });
		  }

		  var keysFunc = isFull
		    ? (isFlat ? getAllKeysIn : getAllKeys)
		    : (isFlat ? keysIn : keys);

		  var props = isArr ? undefined : keysFunc(value);
		  arrayEach(props || value, function(subValue, key) {
		    if (props) {
		      key = subValue;
		      subValue = value[key];
		    }
		    // Recursively populate clone (susceptible to call stack limits).
		    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		  });
		  return result;
		}

		_baseClone = baseClone;
		return _baseClone;
	}

	var clone_1;
	var hasRequiredClone;

	function requireClone () {
		if (hasRequiredClone) return clone_1;
		hasRequiredClone = 1;
		var baseClone = require_baseClone();

		/** Used to compose bitmasks for cloning. */
		var CLONE_SYMBOLS_FLAG = 4;

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
		  return baseClone(value, CLONE_SYMBOLS_FLAG);
		}

		clone_1 = clone;
		return clone_1;
	}

	var cloneDeep_1;
	var hasRequiredCloneDeep;

	function requireCloneDeep () {
		if (hasRequiredCloneDeep) return cloneDeep_1;
		hasRequiredCloneDeep = 1;
		var baseClone = require_baseClone();

		/** Used to compose bitmasks for cloning. */
		var CLONE_DEEP_FLAG = 1,
		    CLONE_SYMBOLS_FLAG = 4;

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
		  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
		}

		cloneDeep_1 = cloneDeep;
		return cloneDeep_1;
	}

	var cloneDeepWith_1;
	var hasRequiredCloneDeepWith;

	function requireCloneDeepWith () {
		if (hasRequiredCloneDeepWith) return cloneDeepWith_1;
		hasRequiredCloneDeepWith = 1;
		var baseClone = require_baseClone();

		/** Used to compose bitmasks for cloning. */
		var CLONE_DEEP_FLAG = 1,
		    CLONE_SYMBOLS_FLAG = 4;

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
		  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
		}

		cloneDeepWith_1 = cloneDeepWith;
		return cloneDeepWith_1;
	}

	var cloneWith_1;
	var hasRequiredCloneWith;

	function requireCloneWith () {
		if (hasRequiredCloneWith) return cloneWith_1;
		hasRequiredCloneWith = 1;
		var baseClone = require_baseClone();

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

		cloneWith_1 = cloneWith;
		return cloneWith_1;
	}

	/**
	 * The base implementation of `_.conformsTo` which accepts `props` to check.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property predicates to conform to.
	 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	 */

	var _baseConformsTo;
	var hasRequired_baseConformsTo;

	function require_baseConformsTo () {
		if (hasRequired_baseConformsTo) return _baseConformsTo;
		hasRequired_baseConformsTo = 1;
		function baseConformsTo(object, source, props) {
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

		_baseConformsTo = baseConformsTo;
		return _baseConformsTo;
	}

	var conformsTo_1;
	var hasRequiredConformsTo;

	function requireConformsTo () {
		if (hasRequiredConformsTo) return conformsTo_1;
		hasRequiredConformsTo = 1;
		var baseConformsTo = require_baseConformsTo(),
		    keys = requireKeys();

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
		  return source == null || baseConformsTo(object, source, keys(source));
		}

		conformsTo_1 = conformsTo;
		return conformsTo_1;
	}

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */

	var _baseGt;
	var hasRequired_baseGt;

	function require_baseGt () {
		if (hasRequired_baseGt) return _baseGt;
		hasRequired_baseGt = 1;
		function baseGt(value, other) {
		  return value > other;
		}

		_baseGt = baseGt;
		return _baseGt;
	}

	/** Used to match a single whitespace character. */

	var _trimmedEndIndex;
	var hasRequired_trimmedEndIndex;

	function require_trimmedEndIndex () {
		if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
		hasRequired_trimmedEndIndex = 1;
		var reWhitespace = /\s/;

		/**
		 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
		 * character of `string`.
		 *
		 * @private
		 * @param {string} string The string to inspect.
		 * @returns {number} Returns the index of the last non-whitespace character.
		 */
		function trimmedEndIndex(string) {
		  var index = string.length;

		  while (index-- && reWhitespace.test(string.charAt(index))) {}
		  return index;
		}

		_trimmedEndIndex = trimmedEndIndex;
		return _trimmedEndIndex;
	}

	var _baseTrim;
	var hasRequired_baseTrim;

	function require_baseTrim () {
		if (hasRequired_baseTrim) return _baseTrim;
		hasRequired_baseTrim = 1;
		var trimmedEndIndex = require_trimmedEndIndex();

		/** Used to match leading whitespace. */
		var reTrimStart = /^\s+/;

		/**
		 * The base implementation of `_.trim`.
		 *
		 * @private
		 * @param {string} string The string to trim.
		 * @returns {string} Returns the trimmed string.
		 */
		function baseTrim(string) {
		  return string
		    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
		    : string;
		}

		_baseTrim = baseTrim;
		return _baseTrim;
	}

	var isSymbol_1;
	var hasRequiredIsSymbol;

	function requireIsSymbol () {
		if (hasRequiredIsSymbol) return isSymbol_1;
		hasRequiredIsSymbol = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var symbolTag = '[object Symbol]';

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
		function isSymbol(value) {
		  return typeof value == 'symbol' ||
		    (isObjectLike(value) && baseGetTag(value) == symbolTag);
		}

		isSymbol_1 = isSymbol;
		return isSymbol_1;
	}

	var toNumber_1;
	var hasRequiredToNumber;

	function requireToNumber () {
		if (hasRequiredToNumber) return toNumber_1;
		hasRequiredToNumber = 1;
		var baseTrim = require_baseTrim(),
		    isObject = requireIsObject(),
		    isSymbol = requireIsSymbol();

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
		function toNumber(value) {
		  if (typeof value == 'number') {
		    return value;
		  }
		  if (isSymbol(value)) {
		    return NAN;
		  }
		  if (isObject(value)) {
		    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
		    value = isObject(other) ? (other + '') : other;
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

		toNumber_1 = toNumber;
		return toNumber_1;
	}

	var _createRelationalOperation;
	var hasRequired_createRelationalOperation;

	function require_createRelationalOperation () {
		if (hasRequired_createRelationalOperation) return _createRelationalOperation;
		hasRequired_createRelationalOperation = 1;
		var toNumber = requireToNumber();

		/**
		 * Creates a function that performs a relational operation on two values.
		 *
		 * @private
		 * @param {Function} operator The function to perform the operation.
		 * @returns {Function} Returns the new relational operation function.
		 */
		function createRelationalOperation(operator) {
		  return function(value, other) {
		    if (!(typeof value == 'string' && typeof other == 'string')) {
		      value = toNumber(value);
		      other = toNumber(other);
		    }
		    return operator(value, other);
		  };
		}

		_createRelationalOperation = createRelationalOperation;
		return _createRelationalOperation;
	}

	var gt_1;
	var hasRequiredGt;

	function requireGt () {
		if (hasRequiredGt) return gt_1;
		hasRequiredGt = 1;
		var baseGt = require_baseGt(),
		    createRelationalOperation = require_createRelationalOperation();

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
		var gt = createRelationalOperation(baseGt);

		gt_1 = gt;
		return gt_1;
	}

	var gte_1;
	var hasRequiredGte;

	function requireGte () {
		if (hasRequiredGte) return gte_1;
		hasRequiredGte = 1;
		var createRelationalOperation = require_createRelationalOperation();

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
		var gte = createRelationalOperation(function(value, other) {
		  return value >= other;
		});

		gte_1 = gte;
		return gte_1;
	}

	var _baseIsArrayBuffer;
	var hasRequired_baseIsArrayBuffer;

	function require_baseIsArrayBuffer () {
		if (hasRequired_baseIsArrayBuffer) return _baseIsArrayBuffer;
		hasRequired_baseIsArrayBuffer = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		var arrayBufferTag = '[object ArrayBuffer]';

		/**
		 * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
		 */
		function baseIsArrayBuffer(value) {
		  return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
		}

		_baseIsArrayBuffer = baseIsArrayBuffer;
		return _baseIsArrayBuffer;
	}

	var isArrayBuffer_1;
	var hasRequiredIsArrayBuffer;

	function requireIsArrayBuffer () {
		if (hasRequiredIsArrayBuffer) return isArrayBuffer_1;
		hasRequiredIsArrayBuffer = 1;
		var baseIsArrayBuffer = require_baseIsArrayBuffer(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

		/* Node.js helper references. */
		var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;

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
		var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

		isArrayBuffer_1 = isArrayBuffer;
		return isArrayBuffer_1;
	}

	var isArrayLikeObject_1;
	var hasRequiredIsArrayLikeObject;

	function requireIsArrayLikeObject () {
		if (hasRequiredIsArrayLikeObject) return isArrayLikeObject_1;
		hasRequiredIsArrayLikeObject = 1;
		var isArrayLike = requireIsArrayLike(),
		    isObjectLike = requireIsObjectLike();

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
		  return isObjectLike(value) && isArrayLike(value);
		}

		isArrayLikeObject_1 = isArrayLikeObject;
		return isArrayLikeObject_1;
	}

	var isBoolean_1;
	var hasRequiredIsBoolean;

	function requireIsBoolean () {
		if (hasRequiredIsBoolean) return isBoolean_1;
		hasRequiredIsBoolean = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]';

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
		    (isObjectLike(value) && baseGetTag(value) == boolTag);
		}

		isBoolean_1 = isBoolean;
		return isBoolean_1;
	}

	var _baseIsDate;
	var hasRequired_baseIsDate;

	function require_baseIsDate () {
		if (hasRequired_baseIsDate) return _baseIsDate;
		hasRequired_baseIsDate = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var dateTag = '[object Date]';

		/**
		 * The base implementation of `_.isDate` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
		 */
		function baseIsDate(value) {
		  return isObjectLike(value) && baseGetTag(value) == dateTag;
		}

		_baseIsDate = baseIsDate;
		return _baseIsDate;
	}

	var isDate_1;
	var hasRequiredIsDate;

	function requireIsDate () {
		if (hasRequiredIsDate) return isDate_1;
		hasRequiredIsDate = 1;
		var baseIsDate = require_baseIsDate(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

		/* Node.js helper references. */
		var nodeIsDate = nodeUtil && nodeUtil.isDate;

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
		var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

		isDate_1 = isDate;
		return isDate_1;
	}

	var isPlainObject_1;
	var hasRequiredIsPlainObject;

	function requireIsPlainObject () {
		if (hasRequiredIsPlainObject) return isPlainObject_1;
		hasRequiredIsPlainObject = 1;
		var baseGetTag = require_baseGetTag(),
		    getPrototype = require_getPrototype(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var objectTag = '[object Object]';

		/** Used for built-in method references. */
		var funcProto = Function.prototype,
		    objectProto = Object.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

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
		function isPlainObject(value) {
		  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
		    return false;
		  }
		  var proto = getPrototype(value);
		  if (proto === null) {
		    return true;
		  }
		  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
		    funcToString.call(Ctor) == objectCtorString;
		}

		isPlainObject_1 = isPlainObject;
		return isPlainObject_1;
	}

	var isElement_1;
	var hasRequiredIsElement;

	function requireIsElement () {
		if (hasRequiredIsElement) return isElement_1;
		hasRequiredIsElement = 1;
		var isObjectLike = requireIsObjectLike(),
		    isPlainObject = requireIsPlainObject();

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
		  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
		}

		isElement_1 = isElement;
		return isElement_1;
	}

	var isEmpty_1;
	var hasRequiredIsEmpty;

	function requireIsEmpty () {
		if (hasRequiredIsEmpty) return isEmpty_1;
		hasRequiredIsEmpty = 1;
		var baseKeys = require_baseKeys(),
		    getTag = require_getTag(),
		    isArguments = requireIsArguments(),
		    isArray = requireIsArray(),
		    isArrayLike = requireIsArrayLike(),
		    isBuffer = requireIsBuffer(),
		    isPrototype = require_isPrototype(),
		    isTypedArray = requireIsTypedArray();

		/** `Object#toString` result references. */
		var mapTag = '[object Map]',
		    setTag = '[object Set]';

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

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
		  if (isArrayLike(value) &&
		      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
		        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
		    return !value.length;
		  }
		  var tag = getTag(value);
		  if (tag == mapTag || tag == setTag) {
		    return !value.size;
		  }
		  if (isPrototype(value)) {
		    return !baseKeys(value).length;
		  }
		  for (var key in value) {
		    if (hasOwnProperty.call(value, key)) {
		      return false;
		    }
		  }
		  return true;
		}

		isEmpty_1 = isEmpty;
		return isEmpty_1;
	}

	/** Used to stand-in for `undefined` hash values. */

	var _setCacheAdd;
	var hasRequired_setCacheAdd;

	function require_setCacheAdd () {
		if (hasRequired_setCacheAdd) return _setCacheAdd;
		hasRequired_setCacheAdd = 1;
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
		function setCacheAdd(value) {
		  this.__data__.set(value, HASH_UNDEFINED);
		  return this;
		}

		_setCacheAdd = setCacheAdd;
		return _setCacheAdd;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	var _setCacheHas;
	var hasRequired_setCacheHas;

	function require_setCacheHas () {
		if (hasRequired_setCacheHas) return _setCacheHas;
		hasRequired_setCacheHas = 1;
		function setCacheHas(value) {
		  return this.__data__.has(value);
		}

		_setCacheHas = setCacheHas;
		return _setCacheHas;
	}

	var _SetCache;
	var hasRequired_SetCache;

	function require_SetCache () {
		if (hasRequired_SetCache) return _SetCache;
		hasRequired_SetCache = 1;
		var MapCache = require_MapCache(),
		    setCacheAdd = require_setCacheAdd(),
		    setCacheHas = require_setCacheHas();

		/**
		 *
		 * Creates an array cache object to store unique values.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [values] The values to cache.
		 */
		function SetCache(values) {
		  var index = -1,
		      length = values == null ? 0 : values.length;

		  this.__data__ = new MapCache;
		  while (++index < length) {
		    this.add(values[index]);
		  }
		}

		// Add methods to `SetCache`.
		SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
		SetCache.prototype.has = setCacheHas;

		_SetCache = SetCache;
		return _SetCache;
	}

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

	var _arraySome;
	var hasRequired_arraySome;

	function require_arraySome () {
		if (hasRequired_arraySome) return _arraySome;
		hasRequired_arraySome = 1;
		function arraySome(array, predicate) {
		  var index = -1,
		      length = array == null ? 0 : array.length;

		  while (++index < length) {
		    if (predicate(array[index], index, array)) {
		      return true;
		    }
		  }
		  return false;
		}

		_arraySome = arraySome;
		return _arraySome;
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	var _cacheHas;
	var hasRequired_cacheHas;

	function require_cacheHas () {
		if (hasRequired_cacheHas) return _cacheHas;
		hasRequired_cacheHas = 1;
		function cacheHas(cache, key) {
		  return cache.has(key);
		}

		_cacheHas = cacheHas;
		return _cacheHas;
	}

	var _equalArrays;
	var hasRequired_equalArrays;

	function require_equalArrays () {
		if (hasRequired_equalArrays) return _equalArrays;
		hasRequired_equalArrays = 1;
		var SetCache = require_SetCache(),
		    arraySome = require_arraySome(),
		    cacheHas = require_cacheHas();

		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;

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
		function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
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
		      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

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

		_equalArrays = equalArrays;
		return _equalArrays;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	var _mapToArray;
	var hasRequired_mapToArray;

	function require_mapToArray () {
		if (hasRequired_mapToArray) return _mapToArray;
		hasRequired_mapToArray = 1;
		function mapToArray(map) {
		  var index = -1,
		      result = Array(map.size);

		  map.forEach(function(value, key) {
		    result[++index] = [key, value];
		  });
		  return result;
		}

		_mapToArray = mapToArray;
		return _mapToArray;
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	var _setToArray;
	var hasRequired_setToArray;

	function require_setToArray () {
		if (hasRequired_setToArray) return _setToArray;
		hasRequired_setToArray = 1;
		function setToArray(set) {
		  var index = -1,
		      result = Array(set.size);

		  set.forEach(function(value) {
		    result[++index] = value;
		  });
		  return result;
		}

		_setToArray = setToArray;
		return _setToArray;
	}

	var _equalByTag;
	var hasRequired_equalByTag;

	function require_equalByTag () {
		if (hasRequired_equalByTag) return _equalByTag;
		hasRequired_equalByTag = 1;
		var Symbol = require_Symbol(),
		    Uint8Array = require_Uint8Array(),
		    eq = requireEq(),
		    equalArrays = require_equalArrays(),
		    mapToArray = require_mapToArray(),
		    setToArray = require_setToArray();

		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;

		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    symbolTag = '[object Symbol]';

		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]';

		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : undefined,
		    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
		function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
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
		    case numberTag:
		      // Coerce booleans to `1` or `0` and dates to milliseconds.
		      // Invalid dates are coerced to `NaN`.
		      return eq(+object, +other);

		    case errorTag:
		      return object.name == other.name && object.message == other.message;

		    case regexpTag:
		    case stringTag:
		      // Coerce regexes to strings and treat strings, primitives and objects,
		      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
		      // for more details.
		      return object == (other + '');

		    case mapTag:
		      var convert = mapToArray;

		    case setTag:
		      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
		      convert || (convert = setToArray);

		      if (object.size != other.size && !isPartial) {
		        return false;
		      }
		      // Assume cyclic values are equal.
		      var stacked = stack.get(object);
		      if (stacked) {
		        return stacked == other;
		      }
		      bitmask |= COMPARE_UNORDERED_FLAG;

		      // Recursively compare objects (susceptible to call stack limits).
		      stack.set(object, other);
		      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
		      stack['delete'](object);
		      return result;

		    case symbolTag:
		      if (symbolValueOf) {
		        return symbolValueOf.call(object) == symbolValueOf.call(other);
		      }
		  }
		  return false;
		}

		_equalByTag = equalByTag;
		return _equalByTag;
	}

	var _equalObjects;
	var hasRequired_equalObjects;

	function require_equalObjects () {
		if (hasRequired_equalObjects) return _equalObjects;
		hasRequired_equalObjects = 1;
		var getAllKeys = require_getAllKeys();

		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1;

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

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
		function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
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
		    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
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

		_equalObjects = equalObjects;
		return _equalObjects;
	}

	var _baseIsEqualDeep;
	var hasRequired_baseIsEqualDeep;

	function require_baseIsEqualDeep () {
		if (hasRequired_baseIsEqualDeep) return _baseIsEqualDeep;
		hasRequired_baseIsEqualDeep = 1;
		var Stack = require_Stack(),
		    equalArrays = require_equalArrays(),
		    equalByTag = require_equalByTag(),
		    equalObjects = require_equalObjects(),
		    getTag = require_getTag(),
		    isArray = requireIsArray(),
		    isBuffer = requireIsBuffer(),
		    isTypedArray = requireIsTypedArray();

		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1;

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
		function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		  var objIsArr = isArray(object),
		      othIsArr = isArray(other),
		      objTag = objIsArr ? arrayTag : getTag(object),
		      othTag = othIsArr ? arrayTag : getTag(other);

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
		    stack || (stack = new Stack);
		    return (objIsArr || isTypedArray(object))
		      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
		      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		  }
		  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
		    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
		        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

		    if (objIsWrapped || othIsWrapped) {
		      var objUnwrapped = objIsWrapped ? object.value() : object,
		          othUnwrapped = othIsWrapped ? other.value() : other;

		      stack || (stack = new Stack);
		      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		    }
		  }
		  if (!isSameTag) {
		    return false;
		  }
		  stack || (stack = new Stack);
		  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
		}

		_baseIsEqualDeep = baseIsEqualDeep;
		return _baseIsEqualDeep;
	}

	var _baseIsEqual;
	var hasRequired_baseIsEqual;

	function require_baseIsEqual () {
		if (hasRequired_baseIsEqual) return _baseIsEqual;
		hasRequired_baseIsEqual = 1;
		var baseIsEqualDeep = require_baseIsEqualDeep(),
		    isObjectLike = requireIsObjectLike();

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
		function baseIsEqual(value, other, bitmask, customizer, stack) {
		  if (value === other) {
		    return true;
		  }
		  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
		    return value !== value && other !== other;
		  }
		  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
		}

		_baseIsEqual = baseIsEqual;
		return _baseIsEqual;
	}

	var isEqual_1;
	var hasRequiredIsEqual;

	function requireIsEqual () {
		if (hasRequiredIsEqual) return isEqual_1;
		hasRequiredIsEqual = 1;
		var baseIsEqual = require_baseIsEqual();

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
		  return baseIsEqual(value, other);
		}

		isEqual_1 = isEqual;
		return isEqual_1;
	}

	var isEqualWith_1;
	var hasRequiredIsEqualWith;

	function requireIsEqualWith () {
		if (hasRequiredIsEqualWith) return isEqualWith_1;
		hasRequiredIsEqualWith = 1;
		var baseIsEqual = require_baseIsEqual();

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
		  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
		}

		isEqualWith_1 = isEqualWith;
		return isEqualWith_1;
	}

	var isError_1;
	var hasRequiredIsError;

	function requireIsError () {
		if (hasRequiredIsError) return isError_1;
		hasRequiredIsError = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike(),
		    isPlainObject = requireIsPlainObject();

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
		  if (!isObjectLike(value)) {
		    return false;
		  }
		  var tag = baseGetTag(value);
		  return tag == errorTag || tag == domExcTag ||
		    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
		}

		isError_1 = isError;
		return isError_1;
	}

	var _isFinite;
	var hasRequired_isFinite;

	function require_isFinite () {
		if (hasRequired_isFinite) return _isFinite;
		hasRequired_isFinite = 1;
		var root = require_root();

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

		_isFinite = isFinite;
		return _isFinite;
	}

	var toFinite_1;
	var hasRequiredToFinite;

	function requireToFinite () {
		if (hasRequiredToFinite) return toFinite_1;
		hasRequiredToFinite = 1;
		var toNumber = requireToNumber();

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
		function toFinite(value) {
		  if (!value) {
		    return value === 0 ? value : 0;
		  }
		  value = toNumber(value);
		  if (value === INFINITY || value === -INFINITY) {
		    var sign = (value < 0 ? -1 : 1);
		    return sign * MAX_INTEGER;
		  }
		  return value === value ? value : 0;
		}

		toFinite_1 = toFinite;
		return toFinite_1;
	}

	var toInteger_1;
	var hasRequiredToInteger;

	function requireToInteger () {
		if (hasRequiredToInteger) return toInteger_1;
		hasRequiredToInteger = 1;
		var toFinite = requireToFinite();

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
		function toInteger(value) {
		  var result = toFinite(value),
		      remainder = result % 1;

		  return result === result ? (remainder ? result - remainder : result) : 0;
		}

		toInteger_1 = toInteger;
		return toInteger_1;
	}

	var isInteger_1;
	var hasRequiredIsInteger;

	function requireIsInteger () {
		if (hasRequiredIsInteger) return isInteger_1;
		hasRequiredIsInteger = 1;
		var toInteger = requireToInteger();

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
		function isInteger(value) {
		  return typeof value == 'number' && value == toInteger(value);
		}

		isInteger_1 = isInteger;
		return isInteger_1;
	}

	var _baseIsMatch;
	var hasRequired_baseIsMatch;

	function require_baseIsMatch () {
		if (hasRequired_baseIsMatch) return _baseIsMatch;
		hasRequired_baseIsMatch = 1;
		var Stack = require_Stack(),
		    baseIsEqual = require_baseIsEqual();

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
		function baseIsMatch(object, source, matchData, customizer) {
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

		_baseIsMatch = baseIsMatch;
		return _baseIsMatch;
	}

	var _isStrictComparable;
	var hasRequired_isStrictComparable;

	function require_isStrictComparable () {
		if (hasRequired_isStrictComparable) return _isStrictComparable;
		hasRequired_isStrictComparable = 1;
		var isObject = requireIsObject();

		/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */
		function isStrictComparable(value) {
		  return value === value && !isObject(value);
		}

		_isStrictComparable = isStrictComparable;
		return _isStrictComparable;
	}

	var _getMatchData;
	var hasRequired_getMatchData;

	function require_getMatchData () {
		if (hasRequired_getMatchData) return _getMatchData;
		hasRequired_getMatchData = 1;
		var isStrictComparable = require_isStrictComparable(),
		    keys = requireKeys();

		/**
		 * Gets the property names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */
		function getMatchData(object) {
		  var result = keys(object),
		      length = result.length;

		  while (length--) {
		    var key = result[length],
		        value = object[key];

		    result[length] = [key, value, isStrictComparable(value)];
		  }
		  return result;
		}

		_getMatchData = getMatchData;
		return _getMatchData;
	}

	var isMatch_1;
	var hasRequiredIsMatch;

	function requireIsMatch () {
		if (hasRequiredIsMatch) return isMatch_1;
		hasRequiredIsMatch = 1;
		var baseIsMatch = require_baseIsMatch(),
		    getMatchData = require_getMatchData();

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
		  return object === source || baseIsMatch(object, source, getMatchData(source));
		}

		isMatch_1 = isMatch;
		return isMatch_1;
	}

	var isMatchWith_1;
	var hasRequiredIsMatchWith;

	function requireIsMatchWith () {
		if (hasRequiredIsMatchWith) return isMatchWith_1;
		hasRequiredIsMatchWith = 1;
		var baseIsMatch = require_baseIsMatch(),
		    getMatchData = require_getMatchData();

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

		isMatchWith_1 = isMatchWith;
		return isMatchWith_1;
	}

	var isNumber_1;
	var hasRequiredIsNumber;

	function requireIsNumber () {
		if (hasRequiredIsNumber) return isNumber_1;
		hasRequiredIsNumber = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

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
		function isNumber(value) {
		  return typeof value == 'number' ||
		    (isObjectLike(value) && baseGetTag(value) == numberTag);
		}

		isNumber_1 = isNumber;
		return isNumber_1;
	}

	var _isNaN;
	var hasRequired_isNaN;

	function require_isNaN () {
		if (hasRequired_isNaN) return _isNaN;
		hasRequired_isNaN = 1;
		var isNumber = requireIsNumber();

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

		_isNaN = isNaN;
		return _isNaN;
	}

	var _isMaskable;
	var hasRequired_isMaskable;

	function require_isMaskable () {
		if (hasRequired_isMaskable) return _isMaskable;
		hasRequired_isMaskable = 1;
		var coreJsData = require_coreJsData(),
		    isFunction = requireIsFunction(),
		    stubFalse = requireStubFalse();

		/**
		 * Checks if `func` is capable of being masked.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
		 */
		var isMaskable = coreJsData ? isFunction : stubFalse;

		_isMaskable = isMaskable;
		return _isMaskable;
	}

	var isNative_1;
	var hasRequiredIsNative;

	function requireIsNative () {
		if (hasRequiredIsNative) return isNative_1;
		hasRequiredIsNative = 1;
		var baseIsNative = require_baseIsNative(),
		    isMaskable = require_isMaskable();

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

		isNative_1 = isNative;
		return isNative_1;
	}

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

	var isNil_1;
	var hasRequiredIsNil;

	function requireIsNil () {
		if (hasRequiredIsNil) return isNil_1;
		hasRequiredIsNil = 1;
		function isNil(value) {
		  return value == null;
		}

		isNil_1 = isNil;
		return isNil_1;
	}

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

	var isNull_1;
	var hasRequiredIsNull;

	function requireIsNull () {
		if (hasRequiredIsNull) return isNull_1;
		hasRequiredIsNull = 1;
		function isNull(value) {
		  return value === null;
		}

		isNull_1 = isNull;
		return isNull_1;
	}

	var _baseIsRegExp;
	var hasRequired_baseIsRegExp;

	function require_baseIsRegExp () {
		if (hasRequired_baseIsRegExp) return _baseIsRegExp;
		hasRequired_baseIsRegExp = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var regexpTag = '[object RegExp]';

		/**
		 * The base implementation of `_.isRegExp` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
		 */
		function baseIsRegExp(value) {
		  return isObjectLike(value) && baseGetTag(value) == regexpTag;
		}

		_baseIsRegExp = baseIsRegExp;
		return _baseIsRegExp;
	}

	var isRegExp_1;
	var hasRequiredIsRegExp;

	function requireIsRegExp () {
		if (hasRequiredIsRegExp) return isRegExp_1;
		hasRequiredIsRegExp = 1;
		var baseIsRegExp = require_baseIsRegExp(),
		    baseUnary = require_baseUnary(),
		    nodeUtil = require_nodeUtil();

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

		isRegExp_1 = isRegExp;
		return isRegExp_1;
	}

	var isSafeInteger_1;
	var hasRequiredIsSafeInteger;

	function requireIsSafeInteger () {
		if (hasRequiredIsSafeInteger) return isSafeInteger_1;
		hasRequiredIsSafeInteger = 1;
		var isInteger = requireIsInteger();

		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;

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
		  return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
		}

		isSafeInteger_1 = isSafeInteger;
		return isSafeInteger_1;
	}

	var isString_1;
	var hasRequiredIsString;

	function requireIsString () {
		if (hasRequiredIsString) return isString_1;
		hasRequiredIsString = 1;
		var baseGetTag = require_baseGetTag(),
		    isArray = requireIsArray(),
		    isObjectLike = requireIsObjectLike();

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
		function isString(value) {
		  return typeof value == 'string' ||
		    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
		}

		isString_1 = isString;
		return isString_1;
	}

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

	var isUndefined_1;
	var hasRequiredIsUndefined;

	function requireIsUndefined () {
		if (hasRequiredIsUndefined) return isUndefined_1;
		hasRequiredIsUndefined = 1;
		function isUndefined(value) {
		  return value === undefined;
		}

		isUndefined_1 = isUndefined;
		return isUndefined_1;
	}

	var isWeakMap_1;
	var hasRequiredIsWeakMap;

	function requireIsWeakMap () {
		if (hasRequiredIsWeakMap) return isWeakMap_1;
		hasRequiredIsWeakMap = 1;
		var getTag = require_getTag(),
		    isObjectLike = requireIsObjectLike();

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
		  return isObjectLike(value) && getTag(value) == weakMapTag;
		}

		isWeakMap_1 = isWeakMap;
		return isWeakMap_1;
	}

	var isWeakSet_1;
	var hasRequiredIsWeakSet;

	function requireIsWeakSet () {
		if (hasRequiredIsWeakSet) return isWeakSet_1;
		hasRequiredIsWeakSet = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

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

		isWeakSet_1 = isWeakSet;
		return isWeakSet_1;
	}

	/**
	 * The base implementation of `_.lt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 */

	var _baseLt;
	var hasRequired_baseLt;

	function require_baseLt () {
		if (hasRequired_baseLt) return _baseLt;
		hasRequired_baseLt = 1;
		function baseLt(value, other) {
		  return value < other;
		}

		_baseLt = baseLt;
		return _baseLt;
	}

	var lt_1;
	var hasRequiredLt;

	function requireLt () {
		if (hasRequiredLt) return lt_1;
		hasRequiredLt = 1;
		var baseLt = require_baseLt(),
		    createRelationalOperation = require_createRelationalOperation();

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
		var lt = createRelationalOperation(baseLt);

		lt_1 = lt;
		return lt_1;
	}

	var lte_1;
	var hasRequiredLte;

	function requireLte () {
		if (hasRequiredLte) return lte_1;
		hasRequiredLte = 1;
		var createRelationalOperation = require_createRelationalOperation();

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

		lte_1 = lte;
		return lte_1;
	}

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */

	var _iteratorToArray;
	var hasRequired_iteratorToArray;

	function require_iteratorToArray () {
		if (hasRequired_iteratorToArray) return _iteratorToArray;
		hasRequired_iteratorToArray = 1;
		function iteratorToArray(iterator) {
		  var data,
		      result = [];

		  while (!(data = iterator.next()).done) {
		    result.push(data.value);
		  }
		  return result;
		}

		_iteratorToArray = iteratorToArray;
		return _iteratorToArray;
	}

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */

	var _asciiToArray;
	var hasRequired_asciiToArray;

	function require_asciiToArray () {
		if (hasRequired_asciiToArray) return _asciiToArray;
		hasRequired_asciiToArray = 1;
		function asciiToArray(string) {
		  return string.split('');
		}

		_asciiToArray = asciiToArray;
		return _asciiToArray;
	}

	/** Used to compose unicode character classes. */

	var _hasUnicode;
	var hasRequired_hasUnicode;

	function require_hasUnicode () {
		if (hasRequired_hasUnicode) return _hasUnicode;
		hasRequired_hasUnicode = 1;
		var rsAstralRange = '\\ud800-\\udfff',
		    rsComboMarksRange = '\\u0300-\\u036f',
		    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
		    rsComboSymbolsRange = '\\u20d0-\\u20ff',
		    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
		    rsVarRange = '\\ufe0e\\ufe0f';

		/** Used to compose unicode capture groups. */
		var rsZWJ = '\\u200d';

		/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
		var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

		/**
		 * Checks if `string` contains Unicode symbols.
		 *
		 * @private
		 * @param {string} string The string to inspect.
		 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
		 */
		function hasUnicode(string) {
		  return reHasUnicode.test(string);
		}

		_hasUnicode = hasUnicode;
		return _hasUnicode;
	}

	/** Used to compose unicode character classes. */

	var _unicodeToArray;
	var hasRequired_unicodeToArray;

	function require_unicodeToArray () {
		if (hasRequired_unicodeToArray) return _unicodeToArray;
		hasRequired_unicodeToArray = 1;
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
		function unicodeToArray(string) {
		  return string.match(reUnicode) || [];
		}

		_unicodeToArray = unicodeToArray;
		return _unicodeToArray;
	}

	var _stringToArray;
	var hasRequired_stringToArray;

	function require_stringToArray () {
		if (hasRequired_stringToArray) return _stringToArray;
		hasRequired_stringToArray = 1;
		var asciiToArray = require_asciiToArray(),
		    hasUnicode = require_hasUnicode(),
		    unicodeToArray = require_unicodeToArray();

		/**
		 * Converts `string` to an array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the converted array.
		 */
		function stringToArray(string) {
		  return hasUnicode(string)
		    ? unicodeToArray(string)
		    : asciiToArray(string);
		}

		_stringToArray = stringToArray;
		return _stringToArray;
	}

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	var _arrayMap;
	var hasRequired_arrayMap;

	function require_arrayMap () {
		if (hasRequired_arrayMap) return _arrayMap;
		hasRequired_arrayMap = 1;
		function arrayMap(array, iteratee) {
		  var index = -1,
		      length = array == null ? 0 : array.length,
		      result = Array(length);

		  while (++index < length) {
		    result[index] = iteratee(array[index], index, array);
		  }
		  return result;
		}

		_arrayMap = arrayMap;
		return _arrayMap;
	}

	var _baseValues;
	var hasRequired_baseValues;

	function require_baseValues () {
		if (hasRequired_baseValues) return _baseValues;
		hasRequired_baseValues = 1;
		var arrayMap = require_arrayMap();

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
		function baseValues(object, props) {
		  return arrayMap(props, function(key) {
		    return object[key];
		  });
		}

		_baseValues = baseValues;
		return _baseValues;
	}

	var values_1;
	var hasRequiredValues;

	function requireValues () {
		if (hasRequiredValues) return values_1;
		hasRequiredValues = 1;
		var baseValues = require_baseValues(),
		    keys = requireKeys();

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
		function values(object) {
		  return object == null ? [] : baseValues(object, keys(object));
		}

		values_1 = values;
		return values_1;
	}

	var toArray_1;
	var hasRequiredToArray;

	function requireToArray () {
		if (hasRequiredToArray) return toArray_1;
		hasRequiredToArray = 1;
		var Symbol = require_Symbol(),
		    copyArray = require_copyArray(),
		    getTag = require_getTag(),
		    isArrayLike = requireIsArrayLike(),
		    isString = requireIsString(),
		    iteratorToArray = require_iteratorToArray(),
		    mapToArray = require_mapToArray(),
		    setToArray = require_setToArray(),
		    stringToArray = require_stringToArray(),
		    values = requireValues();

		/** `Object#toString` result references. */
		var mapTag = '[object Map]',
		    setTag = '[object Set]';

		/** Built-in value references. */
		var symIterator = Symbol ? Symbol.iterator : undefined;

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

		toArray_1 = toArray;
		return toArray_1;
	}

	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */

	var _baseClamp;
	var hasRequired_baseClamp;

	function require_baseClamp () {
		if (hasRequired_baseClamp) return _baseClamp;
		hasRequired_baseClamp = 1;
		function baseClamp(number, lower, upper) {
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

		_baseClamp = baseClamp;
		return _baseClamp;
	}

	var toLength_1;
	var hasRequiredToLength;

	function requireToLength () {
		if (hasRequiredToLength) return toLength_1;
		hasRequiredToLength = 1;
		var baseClamp = require_baseClamp(),
		    toInteger = requireToInteger();

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
		  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
		}

		toLength_1 = toLength;
		return toLength_1;
	}

	var toPlainObject_1;
	var hasRequiredToPlainObject;

	function requireToPlainObject () {
		if (hasRequiredToPlainObject) return toPlainObject_1;
		hasRequiredToPlainObject = 1;
		var copyObject = require_copyObject(),
		    keysIn = requireKeysIn();

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

		toPlainObject_1 = toPlainObject;
		return toPlainObject_1;
	}

	var toSafeInteger_1;
	var hasRequiredToSafeInteger;

	function requireToSafeInteger () {
		if (hasRequiredToSafeInteger) return toSafeInteger_1;
		hasRequiredToSafeInteger = 1;
		var baseClamp = require_baseClamp(),
		    toInteger = requireToInteger();

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
		    ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
		    : (value === 0 ? value : 0);
		}

		toSafeInteger_1 = toSafeInteger;
		return toSafeInteger_1;
	}

	var _baseToString;
	var hasRequired_baseToString;

	function require_baseToString () {
		if (hasRequired_baseToString) return _baseToString;
		hasRequired_baseToString = 1;
		var Symbol = require_Symbol(),
		    arrayMap = require_arrayMap(),
		    isArray = requireIsArray(),
		    isSymbol = requireIsSymbol();

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
		function baseToString(value) {
		  // Exit early for strings to avoid a performance hit in some environments.
		  if (typeof value == 'string') {
		    return value;
		  }
		  if (isArray(value)) {
		    // Recursively convert values (susceptible to call stack limits).
		    return arrayMap(value, baseToString) + '';
		  }
		  if (isSymbol(value)) {
		    return symbolToString ? symbolToString.call(value) : '';
		  }
		  var result = (value + '');
		  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
		}

		_baseToString = baseToString;
		return _baseToString;
	}

	var toString_1;
	var hasRequiredToString;

	function requireToString () {
		if (hasRequiredToString) return toString_1;
		hasRequiredToString = 1;
		var baseToString = require_baseToString();

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

		toString_1 = toString;
		return toString_1;
	}

	var lang;
	var hasRequiredLang;

	function requireLang () {
		if (hasRequiredLang) return lang;
		hasRequiredLang = 1;
		lang = {
		  'castArray': requireCastArray(),
		  'clone': requireClone(),
		  'cloneDeep': requireCloneDeep(),
		  'cloneDeepWith': requireCloneDeepWith(),
		  'cloneWith': requireCloneWith(),
		  'conformsTo': requireConformsTo(),
		  'eq': requireEq(),
		  'gt': requireGt(),
		  'gte': requireGte(),
		  'isArguments': requireIsArguments(),
		  'isArray': requireIsArray(),
		  'isArrayBuffer': requireIsArrayBuffer(),
		  'isArrayLike': requireIsArrayLike(),
		  'isArrayLikeObject': requireIsArrayLikeObject(),
		  'isBoolean': requireIsBoolean(),
		  'isBuffer': requireIsBuffer(),
		  'isDate': requireIsDate(),
		  'isElement': requireIsElement(),
		  'isEmpty': requireIsEmpty(),
		  'isEqual': requireIsEqual(),
		  'isEqualWith': requireIsEqualWith(),
		  'isError': requireIsError(),
		  'isFinite': require_isFinite(),
		  'isFunction': requireIsFunction(),
		  'isInteger': requireIsInteger(),
		  'isLength': requireIsLength(),
		  'isMap': requireIsMap(),
		  'isMatch': requireIsMatch(),
		  'isMatchWith': requireIsMatchWith(),
		  'isNaN': require_isNaN(),
		  'isNative': requireIsNative(),
		  'isNil': requireIsNil(),
		  'isNull': requireIsNull(),
		  'isNumber': requireIsNumber(),
		  'isObject': requireIsObject(),
		  'isObjectLike': requireIsObjectLike(),
		  'isPlainObject': requireIsPlainObject(),
		  'isRegExp': requireIsRegExp(),
		  'isSafeInteger': requireIsSafeInteger(),
		  'isSet': requireIsSet(),
		  'isString': requireIsString(),
		  'isSymbol': requireIsSymbol(),
		  'isTypedArray': requireIsTypedArray(),
		  'isUndefined': requireIsUndefined(),
		  'isWeakMap': requireIsWeakMap(),
		  'isWeakSet': requireIsWeakSet(),
		  'lt': requireLt(),
		  'lte': requireLte(),
		  'toArray': requireToArray(),
		  'toFinite': requireToFinite(),
		  'toInteger': requireToInteger(),
		  'toLength': requireToLength(),
		  'toNumber': requireToNumber(),
		  'toPlainObject': requireToPlainObject(),
		  'toSafeInteger': requireToSafeInteger(),
		  'toString': requireToString()
		};
		return lang;
	}

	var langExports = requireLang();
	var lodash_lang = /*@__PURE__*/getDefaultExportFromCjs(langExports);

	var {
	  toNumber
	} = lodash_lang;
	function collTotalBy(arr, field) {
	  var f = parseFloat(0);
	  arr.map(d => {
	    f += toNumber(d[field]);
	  });
	  return f;
	}

	function fooit(obj) {
	  obj.foo = 'bar';
	  return obj;
	}

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
	    "data-testid": "money-div",
	    className: "main-red"
	  }, getMoney());
	};

	exports.MoneyDiv = MoneyDiv;

}));
//# sourceMappingURL=t-f-bundle-esm-react-and-css.umd.bundle.js.map
