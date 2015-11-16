console.info('');
console.info('-------------------------------------------------------------');
console.info('Express Server with Webpack Hot Middleware');
console.info('-------------------------------------------------------------');
console.info('');

import path from 'path';
import express from 'express';
import webpack from 'webpack';

// https://github.com/webpack/webpack-dev-middleware
import webpackMiddleware from 'webpack-dev-middleware';
// https://github.com/glenjamin/webpack-hot-middleware
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.js';

const isDevelopmentEnvironment = process.env.NODE_ENV !== 'production';
const port = isDevelopmentEnvironment ? 8000 : process.env.PORT;
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

  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/' + process.env.TOPIC + '.html'));
});

app.listen(port, host, function onStart(err) {
  if (err) {
    console.log(err);
  }

  console.info('-------------------------------------------------------------');
  console.info(
    'Please open up: http://%s:%s/%s',
    host,
    port,
    process.env.TOPIC + '.html'
  );
  console.info('-------------------------------------------------------------');
});
