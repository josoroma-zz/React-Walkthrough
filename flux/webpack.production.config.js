'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var pathToApp = path.join(__dirname, 'app');
var pathToAlt = path.join(__dirname, 'node_modules/alt');

module.exports = {
  entry: [
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js'
  },
  resolve: {
    // If we want modules to be required without extensions.
    extensions: ['', '.js', '.jsx'],

    // Replace modules by other modules or paths.
    alias: {
      'app': pathToApp,
      'alt': pathToAlt,
      'ie': 'component-ie'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //     screw_ie8: true
    //   }
    // }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
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
  }
};
