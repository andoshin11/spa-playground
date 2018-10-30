module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '[^/]vue$': 'vue/dist/vue.common.js',
    '^@storybook/(.*)$': '<rootDir>/node_modules/@storybook/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/test/snapshot/*.js'],
  verbose: true,
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  transformIgnorePatterns: [
    './node_modules/(?!vue)',
    './node_modules/@storybook'
  ],
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc'
    }
  }
}
