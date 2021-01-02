const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/globalWordsCount.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: 'words-count',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader',
      exclude: '/node_modules/',
    }],
  },
  resolve: {
    extensions: ['.js']
  }
};