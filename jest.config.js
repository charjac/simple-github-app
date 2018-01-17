const { argv } = require('yargs')

const jestConfig = {
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.test.{ts, tsx}',
        '!src/**/*.d.ts',
        '!src/**/messages.ts',
        '!src/**/types.ts',
        '!src/store/**/index.ts',
        '!**/node_modules/**'
    ],
    coverageDirectory: '.temp',
    coverageThreshold: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: -30
        }
    },
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    preset: 'jest-expo-ts',
    setupFiles: [
        './scripts/testHook/test-setup.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/build/',
        '<rootDir>/node_modules/'
    ],
    transform: {
        '.(js|jsx)': '<rootDir>/node_modules/babel-jest',
        '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?|glamorous-native)'
    ]
}

module.exports = jestConfig
