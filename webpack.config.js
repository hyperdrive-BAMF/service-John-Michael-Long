const webpack = require('webpack');
const path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url?limit=25000'
      // }
    ]
  },
};