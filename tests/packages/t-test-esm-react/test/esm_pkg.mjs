/*
  https://formidable.com/blog/2021/node-esm-and-exports/
  https://github.com/FormidableLabs/trace-pkg/compare/experiment/esm-pkgs-support

  The approach followed by <common-consuming-esm> is not valid here,
    cause it would need us to call asynchronously React components.
  
  We simplify the process by making use of the "browser nature" of tests
    (Mocha - JSDom), and how "global" is available.
  
  So we:
    - resolve (assign the ESM package to a global var) at before() time
    - on our tests (must be within each suite) we just use that global var

*/

"use strict";

// Wrapper for dynamic import() of ESM-only packages.
// Only works in later versions of Node.js 12+

let _moneyPkg
const _getmoneyPkg = async () => {
  if (!_moneyPkg) {
    _moneyPkg = await import("../src/index.js");
  }


  return _moneyPkg;
};


const _resolve = async () => Promise.all([
  global.moneyPkg = await _getmoneyPkg()
]);

export {
  _resolve,
};
