const baseConfig = require('./.eslintrc.js')

const overrideConfig = {
  ...baseConfig,
  extends: ['eslint:recommended', 'typescript'],
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'no-undef': 'off',
    'typescript/interface-name-prefix': ['error', 'always'],
    'typescript/explicit-member-accessibility': 'off'
  }
}

module.exports = overrideConfig
