const path = require('path');

module.exports = {
  target: 'node',
  mode: "development",
  entry: "./src/app.ts",
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    contentBase: path.join(__dirname, 'dist'),
    // open: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};