const webpack = require('webpack');

const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');

var path = require('path');

const devConfig = (env, argv) => {
  return {
    output: {
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
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
