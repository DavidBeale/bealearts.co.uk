'use strict';

const webpack = require('webpack');
const path = require('path');
const PackageLoadersPlugin = require('webpack-package-loaders-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    isProduction ? 'do-nothing-loader' : 'react-hot-loader/webpack',
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime'],
                            cacheDirectory: !isProduction
                        }
                    }//,
                    // {
                    //     loader: 'eslint-loader',
                    //     options: {
                    //         failOnWarning: isProduction,
                    //         failOnError: true
                    //     }
                    // }
                ]
            },
            {
                test: /\.less$/,
                use: isProduction ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?localIdentName=[local]-[hash:base64:5]!less-loader',
                        'less-loader'
                    ]
                }) : [
                    'style-loader',
                    'css-loader?localIdentName=[local]-[hash:base64:5]',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.html$/,
                use: 'html-loader?interpolate'
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
            {from: 'CNAME'},
            {from: 'manifest.json'},
            {from: 'images/icons/*'}
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ], [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        }),
        new ExtractTextPlugin('site.css')
    ]),
    devtool: isProduction ? false : 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
};


function optimize(nonProductionObjects, productionObjects) {
    if (process.env.NODE_ENV === 'production') {
        return nonProductionObjects.concat(productionObjects);;
    } else {
        return nonProductionObjects;
    }
}
