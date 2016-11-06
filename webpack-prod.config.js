var webpack = require('webpack');


var prodLoaders = [
  // javascript/jsx loader - https://www.npmjs.com/package/babel-loader - without the react-hot loader
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
  }
]

module.exports = {
  entry: [
  // our entry file
  './src/bootStrap.js'
  ],
  output: {
    path: './target/webapp/react-bp',
    filename: 'bundle.js'
  },
  devtool:'source-map',
  module: {
    loaders: prodLoaders
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
};
