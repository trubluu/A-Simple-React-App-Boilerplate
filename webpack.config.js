const path = require('path');
var webpack = require("webpack");
 
const config = {
  context: path.join(__dirname, "src"),
  entry: [
    './index.js', 
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
};
module.exports = config;