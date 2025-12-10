module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react'],
  rules: {
    // your rules
  },
  settings: { react: { version: 'detect' } }
};
