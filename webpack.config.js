var getConfig = require('hjs-webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = getConfig({
  isDev: process.env.NODE_ENV !== "production",
  in: 'src/main.js',
  out: 'public',
  output: {
    filename: 'bundle.js'
  },
  clearBeforeBuild: true
});

module.exports = config;
