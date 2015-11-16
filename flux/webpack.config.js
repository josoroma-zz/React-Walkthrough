'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pathToApp = path.join(__dirname, 'app');
var pathToAlt = path.join(__dirname, 'node_modules/alt');

var pathToAlt = path.join(__dirname, 'node_modules/alt');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        // filename: '[name]-[hash].js',
        publicPath: '/'
    },
    resolve: {
      // The directory (absolute path) that contains all our React Components.
      // root: [path.resolve(__dirname)],

      // If we want modules to be required without extensions.
      extensions: ['', '.js', '.jsx'],

      // Replace modules by other modules or paths.
      alias: {
        'app': pathToApp,
        'alt': pathToAlt,
        'ie': 'component-ie'
      }
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              // images that are 25KB or smaller in size will be converted to a
              // BASE64 string and included in the CSS file where it is defined.
              'url?limit=8192',
              'img'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),

        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
};
