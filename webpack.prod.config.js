const prodConfig = require('./webpack.common.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
var path = require('path');

const commonConfig = (env, argv) => {
  return {
    entry: {
      index: './src/index.js',
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
    //code splitting, utilize browser cache
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  };
};

module.exports = (env, argv) =>
  merge.smart(prodConfig(env, argv), commonConfig(env, argv));
