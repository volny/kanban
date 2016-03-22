var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    hash: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        include: __dirname + '/app',
        loader: 'style-loader!css-loader'
      },
    //  {
    //    test: /\.svg/,
    //    include: __dirname + '/app/images',
    //    loader: "file-loader"
    //  }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'

    })
  ]
};

