const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        'index': './index.es'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        loaders: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    "latest",
                    "stage-3"
                ]
            }
        }]
    }
}