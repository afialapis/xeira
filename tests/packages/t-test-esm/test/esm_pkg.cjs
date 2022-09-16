/*

  https://formidable.com/blog/2021/node-esm-and-exports/
  https://github.com/FormidableLabs/trace-pkg/compare/experiment/esm-pkgs-support

*/

"use strict";

// Wrapper for dynamic import() of ESM-only packages.
// Only works in later versions of Node.js 12+

let _moneyPkg;
const _getmoneyPkg = async () => {
  if (!_moneyPkg) {
    _moneyPkg = await import("../src/index.mjs");
  }

  return _moneyPkg;
};

const getMoney = async (...args) => {
  const _moneyPkgImpl = await _getmoneyPkg();
  return _moneyPkgImpl.getMoney(...args);
};

// Test helper: We need to resolve all ESM-only dynamic imports before
// mocking, so just call them here.
const _resolve = async () => Promise.all([
  _getmoneyPkg()
]);

module.exports = {
  _resolve,
  getMoney
};
