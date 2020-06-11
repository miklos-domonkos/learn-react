module.exports = {
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!jest.config.js',
    '!**/node_modules/**',
    '!coverage/**',
    '!src/index.js',
    '!src/scraper.js',
  ],
  testEnvironment: 'node',
}
