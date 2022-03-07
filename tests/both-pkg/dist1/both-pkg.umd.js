(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('farrapa-objects')) :
  typeof define === 'function' && define.amd ? define(['exports', 'farrapa-objects'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["farrapaBoth-Pkg"] = {}, global.farrapaObjects));
})(this, (function (exports, farrapaObjects) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var bothPkg = foo => {
    var obj1 = {
      he: 'is',
      the: 'painkiller',
      this: {
        is: 'the',
        'painkiller': 'painkiller'
      }
    };

    var obj2 = _objectSpread2(_objectSpread2({}, obj1), {}, {
      by: {
        'judas': 'priest'
      }
    });

    var obj3 = farrapaObjects.objClone(obj2);
    console.log("Called both-pkg's bothPkg() => ".concat(JSON.stringify(obj3)));
  };

  exports.bothPkg = bothPkg;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
