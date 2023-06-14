import path from 'path'
import { fileURLToPath } from 'url'

// babel and babel-plugin-transform-import-meta will
// transform this lines
//   const __filename = fileURLToPath(import.meta.url)
// to
//   var __filename = (0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString());
//
// So using __filename reserved word as variable name, which will produce the error:
//  TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined

const __my_filename = fileURLToPath(import.meta.url)
const __my_dirname = path.dirname(__my_filename)

const getDirname = () => {
 return __my_dirname
}

export {
  getDirname
}
