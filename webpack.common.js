const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWepackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        // filename: 'bundle.js',
        // 根据入口起点名称动态生成bundle名称
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'./' // IMPORTANT 打包的时候要改成 ./
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./public/index.html'}),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {'modules': false}],
                            'react'
                        ],
                        plugins: [
                            ['transform-object-rest-spread', { 'useBuiltIns': true }],
                            ['transform-class-properties'],
                            ['transform-runtime'],
                            ['syntax-dynamic-import'],
                        ],
                    }
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                } 
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
　　　　　　  {
                test:/\.less$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader','less-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(sa|sc|c|le)ss$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
}

