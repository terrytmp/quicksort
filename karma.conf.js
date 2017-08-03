module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],

    files: [
      'test/*.spec.js'
    ],
    reporters: ['spec'],
    singleRun: true,
    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.spec.js': ['webpack'],
    },
    singleRun: true,
    webpack: {
      // you don't need to specify the entry option because
      // karma watches the test entry points
      // webpack watches dependencies

      // ... remainder of webpack configuration (or import)
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
        ],
      }
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
          // options i.e.
          chunks: false
      }
    }
  });
};
