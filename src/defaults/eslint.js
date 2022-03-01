const path = require('path');
const {getBabelConfig} = require('./babel');

function _getParserOptions (xeiraConfig) {
  const babelConfig = getBabelConfig(xeiraConfig);

  return {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "globalReturn ": true,
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    },
    "requireConfigFile": false,
    ...babelConfig  
  }
}

function _getExtends (xeiraConfig) {
  let base= [
    "eslint:recommended"
  ]
  if (xeiraConfig.usesReact) {
    base.push(
      "plugin:react/recommended"
    )
  }
  return base
}

function _getPlugins (xeiraConfig) {
  if (xeiraConfig.usesReact) {
    return [
      "react",
      "react-hooks"
    ]
  }
  return undefined
}

function _getSettings (xeiraConfig) {
  if (xeiraConfig.usesReact) {
    return {
      "react": {
        "version": "detect"
      }
    }
  }
  return undefined
}

function _getRules (xeiraConfig) {
  let base= {
    "semi": 0,
    "vars-on-top": 0,
    "spaced-comment": 0,
    "prefer-template": 0,
    "consistent-return": 0,
    "comma-dangle": 0,
    "no-use-before-define": 0,
    "no-return-assign": 0,
    "no-case-declarations": 0,
    "no-cond-assign": 0,
    "no-console": 0,
    "max-len": 0,
    "arrow-body-style": 0,
    "new-cap": 0,
    "quotes": 0,
    "quote-props": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "padded-blocks": 0,
    "keyword-spacing": 0,
    "no-var": 1,
    "no-trailing-spaces": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": [1, {"argsIgnorePattern": "^_", "varsIgnorePattern": "^_"}],
    "no-inner-declarations": 0,
    "space-before-function-paren": 0,
    "global-require": 0,
    "no-empty": 0
  }
  if (xeiraConfig.usesReact) {
    base= {
      ...base,
      "react/jsx-indent": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-wrap-multilines": 0,
      "react/jsx-space-before-closing": 0,
      "react/jsx-closing-bracket-location": 0,
      "react/prop-types": 0,
      "react/prefer-stateless-function": 0,
      "no-empty": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"      
    }
  }
  return base
}

function getEslintConfig(xeiraConfig) {
  return {
    root: true,
    parser: "@babel/eslint-parser",
    parserOptions: _getParserOptions(xeiraConfig),
    extends: _getExtends(xeiraConfig),
    plugins: _getPlugins(xeiraConfig),
    settings: _getSettings(xeiraConfig),
    env: {
      browser: true,
      mocha: true,
      node: true,
      es6: true
    },
    rules: _getRules(xeiraConfig)
  }
}


function getEslintIgnorePath() {
  return path.join(__dirname, '.eslintignore')
}

module.exports= {
  getEslintConfig,
  getEslintIgnorePath
}