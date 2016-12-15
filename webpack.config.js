'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const path = require('path');
const PackageLoadersPlugin = require('webpack-package-loaders-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

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
                loader: isProduction ? 'babel?plugins[]=transform-runtime' : 'react-hot!babel?plugins[]=transform-runtime,cacheDirectory=true',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: isProduction ? ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") : "style-loader!css-loader!less-loader"
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
    resolve: {
        alias: {
            app: path.join(path.join(__dirname, 'src/app'))
        }
    },
    plugins: optimize([
        new PackageLoadersPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'CNAME'}
        ])
    ], [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('site.css')
    ]),
    devtool: isProduction ? false : 'source-map',
    devServer: {
        contentBase: '../dist',
    },
    eslint: {
        failOnWarning: isProduction,
        failOnError: true
    }
});


function optimize(nonProductionObjects, productionObjects) {
    if (process.env.NODE_ENV === 'production') {
        return nonProductionObjects.concat(productionObjects);;
    } else {
        return nonProductionObjects;
    }
}
