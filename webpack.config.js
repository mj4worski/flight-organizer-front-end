const path = require('path');
const webpack = require('webpack');

const BUILD_PATH = path.resolve(__dirname + '/build');
const APP_PATH = path.resolve(__dirname + '/src');

module.exports = {
    entry: APP_PATH + '/index.js',
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
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2016', 'react', "flow"],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }
            },
            {
                test: /\.scss$/,
                include: APP_PATH,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
};