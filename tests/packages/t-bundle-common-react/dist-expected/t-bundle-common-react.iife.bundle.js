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
var tBundleCommonReact = (function (exports) {
	'use strict';

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
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";

	(function (module) {

		{
		  module.exports = react_production_min;
		}
	} (react));

	var farrapaCollections = {};

	var farrapaNumbers$1 = {};

	Object.defineProperty(farrapaNumbers$1, '__esModule', { value: true });

	function asDecimal(n, d) {
	  if (isNaN(n)) n = parseFloat(0);
	  var f = d == undefined ? parseFloat(n) : parseFloat(n).toFixed(d);
	  var parts = f.toString().split(".");
	  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	  return parts.join(",");
	}

	function asPrice(n) {
	  return asDecimal(n, 2);
	}

	function asPriceWithCurrency(n) {
	  return asPrice(n) + ' €';
	}

	function parseNum(n) {
	  var f = parseFloat(n);
	  if (isNaN(f)) return parseFloat(0);
	  return f;
	}

	farrapaNumbers$1.asDecimal = asDecimal;
	farrapaNumbers$1.asPrice = asPrice;
	farrapaNumbers$1.asPriceWithCurrency = asPriceWithCurrency;
	farrapaNumbers$1.parseNum = parseNum;

	Object.defineProperty(farrapaCollections, '__esModule', { value: true });

	var farrapaNumbers = farrapaNumbers$1;

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

	    if (av < bv) //sort string ascending
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
	    f += farrapaNumbers.parseNum(d[field]);
	  });
	  return f;
	}

	farrapaCollections.arrayChunk = arrayChunk;
	farrapaCollections.arrayRemove = arrayRemove;
	farrapaCollections.arraySum = arraySum;
	farrapaCollections.collMatches = collMatches;
	farrapaCollections.collMaxBy = collMaxBy;
	farrapaCollections.collSort = collSort;
	farrapaCollections.collTotalBy = collTotalBy$1;

	function fooit$1(obj) {
	  obj.foo = 'bar';
	  return obj;
	}

	var foo = /*#__PURE__*/Object.freeze({
		__proto__: null,
		fooit: fooit$1
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(foo);

	var React = react.exports;
	var _require = farrapaCollections,
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
	    id: "money-div"
	  }, getMoney());
	};
	var src = {
	  MoneyDiv: MoneyDiv
	};

	exports["default"] = src;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
//# sourceMappingURL=t-bundle-common-react.iife.bundle.js.map
