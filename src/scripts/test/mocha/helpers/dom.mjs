import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;

if (! global.navigator) {
  // global.navigator is already present in Node>=21
  global.navigator = {
    userAgent: 'node.js',
  }
}




window.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
}

window.cancelAnimationFrame = function (id) {
  clearTimeout(id);
}

copyProps(window, global);
