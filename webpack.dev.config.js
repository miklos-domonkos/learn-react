const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

const devConfig = (env, argv) => {
  return {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].js',
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
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name(resourcePath, resourceQuery) {
              return '[path][name].[ext]';
            },
          },
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
          return chunk.name;
        }

        return [...chunk._modules]
          .slice(0, 1)
          .map((m) =>
            path.relative(
              m.context,
              m.userRequest.substring(0, m.userRequest.lastIndexOf('.'))
            )
          )
          .join('_');
      }),
    ],

    devServer: {
      contentBase: [
        path.join(__dirname, 'dist'),
        path.join(__dirname, 'public'),
      ],
      compress: true,
      port: 9000,
    },
  };
};

module.exports = (env, argv) =>
  merge.smart(commonConfig(env, argv), devConfig(env, argv));
