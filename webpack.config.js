'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const path = require('path');
const PackageLoadersPlugin = require('webpack-package-loaders-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = validate({
    context: path.join(__dirname, 'src'),
    entry: {
        main: ['./site.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'site.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new PackageLoadersPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'CNAME'}
        ]),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin()
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: '../dist',
    }
});
