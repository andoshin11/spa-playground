const baseConfig = require('./.eslintrc.js')

const overrideConfig = {
  ...baseConfig,
  extends: ['eslint:recommended', 'typescript'],
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'no-undef': 'off',
    'typescript/interface-name-prefix': 'warn',
    'typescript/explicit-member-accessibility': 'off',
    'typescript/member-ordering': 'off',
    'typescript/no-parameter-properties': 'off',
    'typescript/member-delimiter-style': 'off'
  }
}

module.exports = overrideConfig
