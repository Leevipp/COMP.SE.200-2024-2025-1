// Jest configuration file (for converting ES6+ to CommonJS for testing)

module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'node'
}