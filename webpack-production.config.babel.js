'use strict';

import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.babel';

const API_URL = process.env.API_URL || 'https://artfinder-rails-api.herokuapp.com';

config.output.publicPath = path.resolve(__dirname, 'build');
config.devtool = 'source-map';
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    API_URL: JSON.stringify(API_URL)
  }),
  new webpack.ProvidePlugin({
    _: 'lodash',
    $: 'jquery',
    jquery: 'jquery'
  })
]

export default config;
