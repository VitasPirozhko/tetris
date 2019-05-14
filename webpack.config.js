const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/js/game.js',
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.html'
        }),
    ],
    devServer: {
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};