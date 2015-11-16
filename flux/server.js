import path from 'path';
import express from 'express';
import jsonServer from 'json-server';

import webpack from 'webpack';
// https://github.com/webpack/webpack-dev-middleware
import webpackMiddleware from 'webpack-dev-middleware';

import config from './webpack.config.js';

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production';

const port = isDevelopmentEnvironment ? 3000 : process.env.PORT;
const host = 'localhost';

const app = express();

app.use(express.static(__dirname + '/dist'));

if (isDevelopmentEnvironment) {
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
}

// Set default middlewares (logger, static, cors and no-cache)
app.use(jsonServer.defaults());

// Add this before server.use(router)
app.use(jsonServer.rewriter({
  '/api/': '/'
}));

// Returns an Express router
var router = jsonServer.router('db.json');
app.use(router);

// http://localhost:3000/locations
// http://localhost:3000/api/locations

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, host, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Open up http://%s:%s/ in your browser.', host, port);
});
