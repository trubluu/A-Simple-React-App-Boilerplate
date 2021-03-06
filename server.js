/**
 * This file runs a webpack-dev-server, using the API.
 *
 * For more information on the options passed to WebpackDevServer,
 * see the webpack-dev-server API docs:
 * https://github.com/webpack/docs/wiki/webpack-dev-server#api
 */
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    contentBase: './',
    hot: true,
    filename: './build/bundle.js',
    publicPath: '/',
    stats: {
    colors: true,
    },
    historyApiFallback: true,
});
server.listen(8080, 'localhost', function() {});