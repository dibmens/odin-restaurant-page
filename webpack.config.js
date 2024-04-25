const { watchFile } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'src/assets/images/[name].[ext]'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Menu',
        header: 'RESTAURANT MENU',
        metaDesc: 'Dynamic restaurant menu exercise',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    static: './dist',
    watchFiles: ["src/*.html"],
    hot: true,
    compress: true,
    port: 9000,
  }
};