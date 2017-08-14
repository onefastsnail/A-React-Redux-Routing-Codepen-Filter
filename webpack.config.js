const path = require('path')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'assets/dist/react');
const APP_DIR = path.resolve(__dirname, 'assets/react');

const config = {
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
        loader : 'babel-loader'
      },
      {
        test : /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};

module.exports = config
