'use strict';

require('babel-core/register');

let path = require('path');
let webpack = require('webpack');

if (process.env.NODE_ENV == 'production') {
  // Production mode uses an Express server

  let express = require('express');
  let httpProxy = require('http-proxy');
  let app = express();
  let static_path = path.join(__dirname, 'build');
  let serverPort = process.env.PORT || 8080;

  app
    .use(express.static(static_path))

    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: static_path
      });
    })

    .listen(serverPort, function (err) {
      if (err) console.error(err);

      console.log(`[NODE] * Listening at localhost:${ serverPort } (production)`);
    });
} else {
  // Development mode uses a webpack-dev-server

  let config = require(path.resolve(__dirname, 'webpack.config.babel')).default;
  let WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: config.devServer.proxy
  }).listen(config.devServer.port, 'localhost', function (err, result) {
    if (err) console.error(err);

    console.log('[NODE] * Listening at localhost:9000 (development)');
  });
}
