
const base = require('./eslint.cjs')
const babelConfig = require('./babel.react.cjs')

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    ...babelConfig
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
