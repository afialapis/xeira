
const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const babelParser = require("@babel/eslint-parser");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: babelParser,
        "ecmaVersion": 7,
        "sourceType": "module",

        parserOptions: {
            "ecmaFeatures": {
                "jsx": true,
                "globalReturn": true,
                "impliedStrict": true,
                "experimentalObjectRestSpread": true,
            },

            "requireConfigFile": false,

            "babelOptions": {
                presets: [["@babel/preset-env", {
                    "targets": {
                        "esmodules": true,
                    },
                }]],

                plugins: [["@babel/plugin-proposal-decorators", {
                    "legacy": true,
                }]],
            },
        },

        globals: {
            ...globals.browser,
            ...globals.mocha,
            ...globals.node,
        },
    },

    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
        "react-hooks": fixupPluginRules(reactHooks),
    },

    settings: {
        "react": {
            "version": "detect",
        },
    },

    rules: {
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

        "no-unused-vars": [1, {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
        }],

        "no-inner-declarations": 0,
        "space-before-function-paren": 0,
        "global-require": 0,
        "no-empty": 0,
        "react/jsx-indent": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-wrap-multilines": 0,
        "react/jsx-space-before-closing": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/prop-types": 0,
        "react/prefer-stateless-function": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
}, globalIgnores(["dist/", "lib/", "libs/", "build/", "arredemo/"])]);
