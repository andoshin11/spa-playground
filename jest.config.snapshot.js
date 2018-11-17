module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|ts)$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/.jest/babel-vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@storybook/(.*)$': '<rootDir>/node_modules/@storybook/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/test/snapshot/*.js'],
  verbose: true,
  setupFiles: ['<rootDir>/.jest/register-context.js']
}
