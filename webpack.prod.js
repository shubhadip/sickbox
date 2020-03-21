const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin')
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const reactLoadableTransformer = require('react-loadable-ts-transformer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);

module.exports = {
    mode: 'production',
    entry: './src/client.tsx',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'hidden-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader',
                  { loader: 'postcss-loader'},
                  'sass-loader',
                ],
            },
            {
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
                getCustomTransformers: () => ({
                  before: [reactLoadableTransformer],
              }),
            },
        }, ],
    },
    plugins:[
      new webpack.DefinePlugin({
        __isBrowser__: "true"
      }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        // assetsPluginInstance,
        new StatsWriterPlugin({
            filename: "stats.json" // Default
        }),
        new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
        }),
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "all"
            }
          }
        }
      }
};