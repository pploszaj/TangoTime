const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s?[ac]ss$/i,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ],
    },
    devServer: {
        hot: true,
        compress: true,
        port: 8080,
        proxy: {
          '/**': 'http://localhost:3000',
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/client/index.html',
        }),
        new MiniCssExtractPlugin(),
      ],
}