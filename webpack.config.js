const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        index: './src/index.js',
        style: './src/style.scss',
        frontend: './src/frontend.scss'
    },
    output: {
        ...defaultConfig.output,
        filename: '[name].js',
    }
}; 