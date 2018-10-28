const baseConfig = require('./.eslintrc.typescript.js')

const overrideConfig = {
  ...baseConfig,
  extends: [...baseConfig.extends, 'plugin:vue/recommended'],
  parserOptions: {
    ...baseConfig.parserOptions,
    parser: 'typescript-eslint-parser'
  },
  rules: {
    ...baseConfig.rules
  }
}

module.exports = overrideConfig
