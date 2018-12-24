const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    historyApiFallback: true
  }
});