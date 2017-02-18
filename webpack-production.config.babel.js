'use strict';

import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.babel';

config.output.publicPath = path.resolve(__dirname, 'build');
config.devtool = 'source-map';
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  })
]

export default config;
