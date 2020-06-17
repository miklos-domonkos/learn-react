const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    entry: {
      index: './src/index.js',
      testpage: './src/testpage.js',
    },

    output: {
      path: path.resolve(__dirname, './dist'),
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.jsx'],
          },
          use: ['babel-loader'],
        },
      ],
    },
    
    //code splitting, utilize browser cache
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

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: path.resolve(__dirname, './template/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'testpage.html',
        chunks: ['testpage'],
        template: path.resolve(__dirname, './template/testpage.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './public'), to: 'public' }],
      }),
    ],
  };
};
