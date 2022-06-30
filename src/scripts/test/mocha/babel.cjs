/*
  experimental-worker runs Babel asynchronously, so it's compatible with .mjs configuration files.
*/

require("@babel/register/experimental-worker")({ 
  presets: [
    ["@babel/preset-env", {"targets": {"esmodules": true}}],
    "@babel/preset-react"
  ],
  plugins: []  
});