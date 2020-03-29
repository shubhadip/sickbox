const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const isForGHPAGE = process.env.GH__PAGES;


module.exports = {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: !isForGHPAGE ? '/' : '/sickbox/',
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },{
        test:/\.(gif|jpe?g|png|ico)$/,
        use:[
            {
                loader: 'file-loader',
                options: {
                    limit: 8192
                }
            }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              limit:1024,
              name:'fonts/[name].[ext]'
            }
          }
        ]
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
      __isBrowser__: JSON.stringify(true),
      __isForGHPAGE__: JSON.stringify(true)
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css' ,
        chunkFilename: '[id].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      async: ['app', 'vendor'],
    }),
  ],
  optimization:{
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  }
};
