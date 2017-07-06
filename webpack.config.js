const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './client/app/store.js',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle.js'
  },
  watch: true,
  // target: 'node',
  // externals: [nodeExternals()],
  // plugins: [
  //   new webpack.DefinePlugin({ "global.GENTLY": false })
  // ],
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}