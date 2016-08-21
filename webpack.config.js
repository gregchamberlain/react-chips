var getConfig = require('hjs-webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = getConfig({
  isDev: process.env.NODE_ENV !== "production",
  in: process.env.NODE_ENV !== "production"?'example/main.js':'src/index.js',
  out: 'dist',
  output: {
    filename: 'bundle.js'
  },
  clearBeforeBuild: true
});

if (process.env.NODE_ENV === "production"){
  config.output.libraryTarget = "commonjs2";
}
module.exports = config;
