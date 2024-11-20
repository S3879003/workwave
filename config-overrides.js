const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer'), // Polyfill buffer
    stream: require.resolve('stream-browserify'), // Polyfill stream
    process: require.resolve('process/browser'), // Polyfill process
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser', // Make process available globally
      Buffer: ['buffer', 'Buffer'], // Make Buffer available globally
    }),
  ]);

  return config;
};
