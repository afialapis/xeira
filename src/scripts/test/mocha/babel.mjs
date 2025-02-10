/*
  experimental-worker runs Babel asynchronously, so it's compatible with .mjs configuration files.
*/

// import {getBabelConfig} from '../../config/babel.mjs'


async function babelRegister() {

  // const babelConfig = await getBabelConfig(context);

  const register = await import("@babel/register/experimental-worker.js")
  register.default({ 

    // Array of ignore conditions, either a regex or a function. (Optional)
    // File paths that match any condition are not compiled.
    //  ignore: [
    //    // When a file path matches this regex then it is **not** compiled
    //    /regex/,
    //
    //    // The file's path is also passed to any ignore functions. It will
    //    // **not** be compiled if `true` is returned.
    //    function(filepath) {
    //      return filepath !== "/path/to/es6-file.js";
    //    },
    //  ],
    //
    //  // Array of accept conditions, either a regex or a function. (Optional)
    //  // File paths that match all conditions are compiled.
    //  only: [
    //    // File paths that **don't** match this regex are not compiled
    //    /my_es6_folder/,
    //
    //    // File paths that **do not** return true are not compiled
    //    function(filepath) {
    //      return filepath === "/path/to/es6-file.js";
    //    },
    //  ],
    //
    //  // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`
    //  // and .js so you'll have to add them back if you want them to be used again.
    // extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],
    //
    //  // Setting this to false will disable the cache.
    //  cache: true,
    
    presets: [
      ["@babel/preset-env", {
        "targets": {"esmodules": true}
      }],
      "@babel/preset-react"
    ],
    plugins: []  
  });
}

babelRegister()

