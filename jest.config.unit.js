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
  collectCoverageFrom: ['src/usecases/**/*.ts'],
  coverageDirectory: './coverage/',
  verbose: true,
  testMatch: ['<rootDir>/test/unit/**/*.ts'],
  transformIgnorePatterns: ['./node_modules/(?!vue)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
