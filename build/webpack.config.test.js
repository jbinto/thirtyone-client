var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    noParse: [
      /node_modules\/sinon\//,
      // /node_modules\/acorn\//,
    ],
    preLoaders: [
      { test: /\.jsx?$/, loader: 'isparta', exclude: /(test|node_modules)/ },
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '31-TEST-bundle.js',
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  // required for enzyme to work properly
  externals: {
    jsdom: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
};
