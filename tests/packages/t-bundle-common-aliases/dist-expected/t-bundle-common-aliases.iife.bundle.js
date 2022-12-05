/**
 * t-bundle-common-aliases v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var tBundleCommonAliases = (function (exports) {
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

	var _require = farrapaCollections,
	  collTotalBy = _require.collTotalBy;
	var _require2 = foo,
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
	var src = {
	  getMoney: getMoney
	};

	exports["default"] = src;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
//# sourceMappingURL=t-bundle-common-aliases.iife.bundle.js.map
