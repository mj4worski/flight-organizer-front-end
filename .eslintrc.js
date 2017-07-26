module.exports = {
    "extends": [
        "airbnb",
    ],
    "parser": "babel-eslint",
    "rules": {
        'react/forbid-prop-types': [1, { forbid: ['any', 'array', 'object'] }],
        "react/jsx-filename-extension": [0, {"extensions": [".js", ".jsx"]}],
    },
    "env": {
        "browser": true
    },
};