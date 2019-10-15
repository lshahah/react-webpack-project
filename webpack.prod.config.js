// 生产环境运行
const path = require("path");
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');
const WorkboxPlugin = require('workbox-webpack-plugin') // 引入 PWA 插件
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: "production",
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    // 代码分割,提取公告文件
    optimization: {
        //   js摇树
        usedExports: true,
        splitChunks: {
            chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
        },
    },
    plugins: [
      
        //做一个缓存，当服务器挂了之后，你依然能够访问这个网页 pwa
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        // 将抽离的资源库合并到html页面上
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve('./dll/vendor-manifest.json')
        }),
    ]
})