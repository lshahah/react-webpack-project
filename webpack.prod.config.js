// 生产环境运行
const path = require("path");
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');
const WorkboxPlugin = require('workbox-webpack-plugin') // 引入 PWA 插件
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(commonConfig, {
    mode: "production",
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
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
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            uglifyJS: {
                output: {
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false,
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                },
                warnings: false,
            },
        }),
    ]
})