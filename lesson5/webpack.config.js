'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
  context: path.join(__dirname + '/src'),
  entry: {
    main: './app.js'
  },
  output: {
      path: path.join(__dirname + '/build/'),
      publicPath: '/',
      filename: "js/[name].js"
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass?sourceMap')
    }, {
      test  : /\.(png|jpg|svg|ttf|ico|eot|woff|woff2)$/,
      loader: 'url?name=[name].[ext]?[hash]&limit=4096'
    }, {
      test: /\.js$/,
      include: path.join(__dirname + '/src'),
      exclude: [/node_modules/],
      loader: 'babel?presets[]=es2015'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase:  path.join(__dirname + '/src'),
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin('css/style.css', {allChunks: true, disable: process.env.NODE_ENV=='development'})
  ]
};

module.exports = webpackConfig;
