module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

};
