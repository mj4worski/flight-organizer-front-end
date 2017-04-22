var path = require('path');
var webpack = require('webpack');

var BUILD_PATH = path.resolve(__dirname + '/build');
var APP_PATH = path.resolve(__dirname + '/app');

module.exports = {
    entry: APP_PATH + '/Index.jsx',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        publicPath: "/"
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: BUILD_PATH,
        port: 3333,
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};