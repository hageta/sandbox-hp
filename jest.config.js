module.exports = {
  'roots': [
    '<rootDir>/test'
  ],
  'transform': {
    '.*\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  // ソースコードにある @ を src へと割当てる
  // "moduleNameMapper": {
  //   "^@/(.*)$": "<rootDir>/src/$1"
  // }
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ]
}