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
  let proxy = new httpProxy.createProxyServer({});

  let proxyTarget = {
    host: 'artfinder-rails-api.herokuapp.com'
  }

  let rewriteRegex = new RegExp('^\/api\/');

  function apiProxy(host, port) {
    return function(req, res, next) {
      if (req.url.match(rewriteRegex)) {
        req.url = req.url.replace(rewriteRegex, '/');

        proxy.web(req, res, { target: { host: host } });
      } else {
        next();
      }
    }
  }

  app
    .use(express.static(static_path))
    .use(apiProxy(proxyTarget.host, proxyTarget.port))

    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: static_path
      });
    })

    .listen(serverPort, function (err) {
      if (err) console.error(err);

      console.log(`[NODE] * Listening at localhost:${ serverPort }`);
    });
} else {
  // Development mode uses a webpack-dev-server

  let config = require(path.resolve(__dirname, 'webpack.config.babel')).default;
  let WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: config.devServer.proxy
  }).listen(config.devServer.port, 'localhost', function (err, result) {
    if (err) {
      console.error(err)
    }

    console.log('[NODE] * Listening at localhost:9000');
  });
}
