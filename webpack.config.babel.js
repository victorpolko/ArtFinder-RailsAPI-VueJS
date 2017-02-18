'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    path.resolve(__dirname, 'app/frontend/index.js'),
    path.resolve(__dirname, 'app/frontend/static/manifest.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },

      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      {
        test: /\.svg$/,
        use: 'url-loader?limit=102400&name=[name]-[hash:base64].[ext]',
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve('./app/frontend/components/'),
      path.resolve('./node_modules/')
    ],

    alias: {
      'vue$': 'vue/dist/vue.common.js' // VueJS standalone
    },

    // So that we can import components without their index.vue files
    extensions: ['.js', '.css', '.vue']
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,
    proxy: {
      '/api': {
        target: 'https://artfinder-rails-api.herokuapp.com:3003',
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  }
}
