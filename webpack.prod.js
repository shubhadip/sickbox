const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin')
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const reactLoadableTransformer = require('react-loadable-ts-transformer');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')


const devMode = process.env.NODE_ENV !== 'production';

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
              test:/\.(gif|jpe?g|png|ico|svg)$/,
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
              test: /\.(woff|woff2|eot|ttf|otf)$/,
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

            useCache: true,
            useTranspileModule: true,
                getCustomTransformers: () => ({
                  before: [reactLoadableTransformer],
              }),
            },
        }, ],
    },
    plugins:[
      new webpack.DefinePlugin({
        __isBrowser__: JSON.stringify(true),
        __isForGHPAGE__: JSON.stringify(false),
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
        // new webpack.optimize.UglifyJsPlugin(),
        new CompressionPlugin(
          {   
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          }
        ),
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
        new CheckerPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
      minimizer:[
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
    ],
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