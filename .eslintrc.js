module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    semi: 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
