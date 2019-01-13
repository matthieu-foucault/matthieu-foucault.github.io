const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  /* optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }, */
};
