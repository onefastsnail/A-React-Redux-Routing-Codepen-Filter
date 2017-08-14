var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'assets/dist/react');
var APP_DIR = path.resolve(__dirname, 'assets/react');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
