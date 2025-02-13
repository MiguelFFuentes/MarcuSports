/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@productcatalog/(.*)$": "<rootDir>/src/app/productcatalog/$1",
    "^@helpers/(.*)$": "<rootDir>/src/tests/helpers/$1",
    "^@core/(.*)$": "<rootDir>/src/app/core/$1"
  }
};