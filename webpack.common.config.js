const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    entry: {
      index: './src/index.js',
      about: './src/about.js',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            name: 'default',
          },
        },
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
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
