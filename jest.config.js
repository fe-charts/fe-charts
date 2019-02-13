const path = require('path')

module.exports = {
  "rootDir": path.resolve(__dirname, './src'),
  "setupTestFrameworkScriptFile": "<rootDir>../jest.setup.js",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>../__mocks__/style-mock.js",
    "\\.(css|scss|less|stylus)$": "<rootDir>../__mocks__/style-mock.js"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "testMatch": [
    "<rootDir>/__test__/**/?(*.)(spec|test).ts?(x)"
  ],
  "testPathIgnorePatterns": [ "/node_modules" ],
  "testURL": 'http://localhost',
  "collectCoverage": true,
  "coverageDirectory": "<rootDir>../tests-coverage",
  "coverageReporters": ["json", "html"],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**"
  ]
}
