/*
  experimental-worker runs Babel asynchronously, so it's compatible with .mjs configuration files.
*/

// import {getBabelConfig} from '../../config/babel.mjs'


async function babelRegister() {

  // const babelConfig = await getBabelConfig(xeiraConfig);

  const register = await import("@babel/register/experimental-worker.js")

  register.default({ 
    presets: [
      ["@babel/preset-env", {"targets": {"esmodules": true}}],
      "@babel/preset-react"
    ],
    plugins: []  
  });
}

babelRegister()