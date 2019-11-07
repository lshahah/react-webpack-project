module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": 0,
        "no-console": 0,
        "import/no-extraneous-dependencies": 0,
        "indent": 0,
        "no-tabs": 0,
        "no-mixed-spaces-and-tabs": 0,
        "react/forbid-prop-types": 0,
        "object-curly-newline": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "comma-dangle": 0,
        "no-param-reassign": 0,
        "dot-notation": 0,
        "react/jsx-boolean-value": 0,
        "no-nested-ternary": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "prefer-destructuring": 0,
        "no-use-before-define": 0,
        "react/jsx-no-bind": 0,
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "react/destructuring-assignment": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "max-len": [
            "error",
            {
                "code": 300
            }
        ],
        "camelcase": 0,
        "react/jsx-one-expression-per-line": 0,
        "import/no-cycle": 0
    },
    "parser": "babel-eslint",
    "plugins": ['react',"react-hooks"],
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
            webpack: {
                config: './webpack.base.config.js'
            }
        }
    },
    
};