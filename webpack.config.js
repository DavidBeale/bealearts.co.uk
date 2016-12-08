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
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot!babel',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'html?interpolate'
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
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //new webpack.optimize.DedupePlugin()
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: '../dist',
    }
});
