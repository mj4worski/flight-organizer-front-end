module.exports = {
    "extends": [
        "airbnb",
    ],
    "parser": "babel-eslint",
    "plugins": [
      "jest"
    ],
    "rules": {
        'react/forbid-prop-types': [1, { forbid: ['any', 'array', 'object'] }],
        "react/jsx-filename-extension": [0, {"extensions": [".js", ".jsx"]}],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/valid-expect": "error"
    },
    "env": {
        "browser": true,
        "jest": true
    },
};