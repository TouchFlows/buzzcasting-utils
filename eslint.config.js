import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    'dist',
    'node_modules',
  ],
  rules: {
    'style/no-tabs': 0,
    'style/no-mixed-spaces-and-tabs': 0,
    'no-console': 0,
    'style/brace-style': ['error', '1tbs'],
    'style/arrow-parens': ['error', 'always'],
    'curly': ['error', 'all'],
    'antfu/consistent-list-newline': 'off',
  },
  languageOptions: {
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
    },
  }
})
