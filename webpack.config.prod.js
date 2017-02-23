var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './site/src/index.js',

  output: {
    path: path.join(__dirname, 'site', 'dist'),
    filename: 'bundle.js',
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ],

  module: {
    rules: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  }
  
};
