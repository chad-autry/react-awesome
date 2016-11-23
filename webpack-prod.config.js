var webpack = require('webpack');

const common = {
  // Important! Do not remove ''. If you do, imports without
  // an extension won't work anymore!
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

//Note: Exclude my own external modules from the node_modules exclusion which I know need compilation
var prodLoaders = [
  // javascript/jsx loader - https://www.npmjs.com/package/babel-loader - without the react-hot loader
  {
    test: /\.jsx?$/,
    exclude: /node_modules(?!\/auth-jwt)/,
    loaders: ['babel-loader'],
  },
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
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ],
};
