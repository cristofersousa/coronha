module.exports = {
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^Vue$': 'vue',
  },
  testMatch: [
    '**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true,
  coverageReporters: [
    'lcov',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    'src/**/*/*.{js,vue}',
    '!src/main.js',
    '!src/router/routes.js',
    '!src/router/index.js',
    '!src/__dev__/**',
    '!**/routes.js',
    '!**/__mocks__/**',
    '!**/node_modules/**',
    '!src/resources/mocks/**',
    '!src/helpers/track/constants.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(babel-jest|jest-vue-preprocessor)/)',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testURL: 'http://localhost/',
};
