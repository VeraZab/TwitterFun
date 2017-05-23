const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: ['./index.js'],

  output: {
    filename: 'bundle.js',

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules']
      },
      {
        test: /\.png$/,
        use: ['url-loader']
      }
    ],
  }
};
