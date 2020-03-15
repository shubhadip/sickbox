const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const reactLoadableTransformer = require('react-loadable-ts-transformer');
const devMode = process.env.NODE_ENV !== 'production';

console.log(process.env.NODE_ENV)
module.exports = {
    entry: './src/server/server.tsx',
    target: 'node',
    mode: 'production',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build',
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
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ]
};