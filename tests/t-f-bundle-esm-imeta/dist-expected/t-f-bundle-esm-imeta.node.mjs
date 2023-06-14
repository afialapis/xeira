/**
 * t-f-bundle-esm-imeta v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// babel and babel-plugin-transform-import-meta will
// transform this lines
//   const __filename = fileURLToPath(import.meta.url)
// to
//   var __filename = (0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString());
//
// So using __filename reserved word as variable name, which will produce the error:
//  TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined

var __my_filename = fileURLToPath(import.meta.url);
var __my_dirname = path.dirname(__my_filename);
var getDirname = function getDirname() {
  return __my_dirname;
};

export { getDirname };
