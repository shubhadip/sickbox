const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    hot: true,
    stats: {
      color: true,
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: '/node_modules/',
        options: {
          jsx: 'react',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
};
