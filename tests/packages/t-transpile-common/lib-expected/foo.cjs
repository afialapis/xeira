"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fooit = fooit;

function fooit(obj) {
  obj.foo = 'bar';
  return obj;
}