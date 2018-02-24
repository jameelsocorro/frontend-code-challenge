const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const path = require('path');

module.exports = baseConfig({
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://api.mcmakler.de/v1',
                pathRewrite: {"^/api" : ""},
                changeOrigin: true
            },
        }
    },
    entry: [
        './index.js'
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    performance: {
        hints: false
    }
});
