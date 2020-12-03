module.exports = {
    env: {
        "es6": true,
    },
    extends: [
        "airbnb-base",
        "plugin:prettier/recommended"
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly',
    },
    plugins: ["prettier"],
    parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'import/prefer-default-export': 'off',
        'no-undef': 'off',
        'no-return-assign': 'off',
        'array-callback-return': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off'
    }
};
