'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig = {
  context: path.join(__dirname + '/src'),
  entry: {
    main: './index.js'
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
      loader: 'babel'
    }, {
      test: /\.jsx$/,
      include: path.join(__dirname + '/src'),
      exclude: [/node_modules/],
      loader: 'react-hot!babel'
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
    port: 3030,
    contentBase:  path.join(__dirname + '/src'),
    hot: true
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'img/',
      to: 'img/'
    }, {
      from: 'fonts/',
      to: 'fonts/'
    }, {
      from: 'css/',
      to: 'css/'
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin('css/style.css', { allChunks: true, disable: process.env.NODE_ENV=='development'})
  ],
  eslint: {
    configFile: '.eslintrc',
  },
};

module.exports = webpackConfig;
