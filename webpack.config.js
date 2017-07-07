const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/app/store.js',
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin({filename: 'css/main.css'})
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
    ]
  }
}