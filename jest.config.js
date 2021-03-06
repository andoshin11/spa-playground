module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '[^/]vue$': 'vue/dist/vue.esm.js',
    '^@storybook/(.*)$': '<rootDir>/node_modules/@storybook/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverageFrom: ['./src/components/**/*.vue'],
  coverageDirectory: './test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true,
  setupFiles: ['./.jest/register-context.js'],
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
