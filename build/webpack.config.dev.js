const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js',
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '31-bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Make hot loading work
  ],
};
