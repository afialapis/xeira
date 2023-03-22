"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDirname = void 0;
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// babel and babel-plugin-transform-import-meta will
// transform this lines
//   const __filename = fileURLToPath(import.meta.url)
// to
//   var _filename = (0, _url.fileURLToPath)(require('url').pathToFileURL(_filename).toString());
//
// So using __filename reserved word as variable name, which will produce the error:
//  TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined

var __my_filename = (0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString());
var _dirname = _path.default.dirname(__my_filename);
var getDirname = () => {
  return _dirname;
};
exports.getDirname = getDirname;