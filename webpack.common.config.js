const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');
var path = require('path');

module.exports = (env, argv) => {
  return {
    entry: {
      index: './src/index.js',
      about: './src/about.js',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: path.resolve(__dirname, './template/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        chunks: ['about'],
        template: path.resolve(__dirname, './template/about.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './public'), to: 'public' }],
      }),
    ],
  };
};
