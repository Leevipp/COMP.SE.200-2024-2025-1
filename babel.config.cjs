// Babel configuration file ( for converting ES6+ to CommonJS for testing)

module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ]
}