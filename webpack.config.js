var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/Index.jsx',
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, './src')
    ],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '31-bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
};
