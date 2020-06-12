const prodConfig = require('./webpack.common.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var path = require('path');

const commonConfig = (env, argv) => {
  return {
    entry: {
      index: './src/index.js',
      vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'redux'],
    },
    output: {
      filename: '[name].[chunkhash].js',
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            enforce: true,
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  };
};

module.exports = (env, argv) =>
  merge.smart(prodConfig(env, argv), commonConfig(env, argv));
