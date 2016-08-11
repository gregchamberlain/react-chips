var getConfig = require('hjs-webpack');

var config = getConfig({

  isDev: process.env.NODE_ENV !== "production",
  // entry point for the app
  in: process.env.NODE_ENV !== "production"?'example/main.js':'src/index.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'dist',

  output: {
    filename: 'bundle.js'
  },


  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true
});

config.output.libraryTarget = "commonjs2";

module.exports = config;
