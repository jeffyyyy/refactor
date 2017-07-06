const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/app/store.js',
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin({filename: 'css/main.css'})
  ],
  // target: 'node',
  // externals: [nodeExternals()],
  // plugins: [
  //   new webpack.DefinePlugin({ "global.GENTLY": false })
  // ],
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