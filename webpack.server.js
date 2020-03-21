const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const reactLoadableTransformer = require('react-loadable-ts-transformer');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack')

console.log(process.env.NODE_ENV)
module.exports = {
    entry: './src/server/server.tsx',
    target: 'node',
    mode: 'production',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  'ignore-loader'
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
            }, 
        ],
    },
    externals: [webpackNodeExternals()],
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ]
};