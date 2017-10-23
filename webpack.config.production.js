var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

module.exports = {
  entry: './src/index.js',
  externals: {
    'react': reactExternal
  },
  output: {
    path: __dirname + '/dist',
    filename: 'ReactComponentBoilerplate.min.js',
    library: 'ReactComponentBoilerplate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
};