'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pathToClient = path.join(__dirname, 'client');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'client/components/' + process.env.TOPIC + '.js')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: process.env.TOPIC + '.[name].[hash].js',
    hash: true
  },
  resolve: {
    // root: [path.resolve(__dirname)],

    // If we want modules to be required without extensions.
    extensions: ['', '.css', '.js', '.jsx'],

    // Replace modules by other modules or paths.
    alias: {
      'client': pathToClient
    }
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new  ExtractTextPlugin(process.env.TOPIC + '.[name].[hash].css'),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'client/' + process.env.TOPIC + '.html',
      filename: process.env.TOPIC + '.html'
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
