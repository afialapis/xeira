
import base from './eslint.mjs'
import babelConfig from './babel.react.mjs'

export default {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    babelOptions: {
      // babelrc: false,
      // configFile: false,
      ...babelConfig 
    }
  },
  extends:  [
    ...base.extends,
    "plugin:react/recommended"
  ],
  env: {
    ...base.env,
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  settings: {
    "react": {
      "version": "detect"
    }    
  },
  rules: {
    ...base.rules,
    "react/jsx-indent": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-space-before-closing": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"     
  }
}

