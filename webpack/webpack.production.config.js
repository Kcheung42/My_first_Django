var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');

config.entry = {
  index: [
    path.join(__dirname, '../static/js/src/main/index')
  ],
  listing_home: [
    path.join(__dirname, '../static/js/src/main/listing_home')
  ],
  create_listing: [
    path.join(__dirname, '../static/js/src/main/create_listing')
  ],
  browse_item: [
    path.join(__dirname, '../static/js/src/main/browse_item')
  ]
};

config.output = {
  path: path.join(__dirname, '../static/builds/'),
  filename: '[name]-[hash].min.js',
  publicPath: '/static/js/builds/'
};

config.plugins = [
  new BundleTracker({ filename: './webpack/webpack-stats.production.json' }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BASE_URL: JSON.stringify('http://0.0.0.0/'),
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourcemap: false
  })
];

module.exports = config
