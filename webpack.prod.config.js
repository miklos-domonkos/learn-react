const prodConfig = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = (env, argv) => {
  return {
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
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

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  };
};

module.exports = (env, argv) =>
  merge.smart(prodConfig(env, argv), commonConfig(env, argv));
