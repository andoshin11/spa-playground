module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '[^/]vue$': 'vue/dist/vue.esm.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/usecase/**/*.ts'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true,
  testMatch: ['<rootDir>/test/unit/**/*.ts'],
  transformIgnorePatterns: ['./node_modules/(?!vue)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
