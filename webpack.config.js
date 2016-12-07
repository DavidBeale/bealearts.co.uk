'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const path = require('path');
const PackageLoadersPlugin = require('webpack-package-loaders-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = validate({
    devtool: 'source-map',
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
        loaders: []
    },
    plugins: [
        new PackageLoadersPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'CNAME'}
        ])
    ]
});
