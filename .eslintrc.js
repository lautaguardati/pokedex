module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "no-param-reassign": ["error", { "props": false }],
        "no-use-before-define": ["error", { "functions": false }],
        "import/extensions": ["error", "always"],
    },
    "ignorePatterns": [".eslintrc.js", "cypress/**/*.js", "cypress.config.js"]
};
