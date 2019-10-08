// 开发环境运行
const path = require("path");
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    mode: "development",
    entry: './src/index.js',
    devtool: 'cheap-module-eval-soure-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', //输出文件名
        chunkFilename: '[name].js'
    },
    devServer: {
        hot: true,
        //  contentbase代表html页面所在的相对目录，如果不配置项，
        // devServer默认html所在的目录就是项目的根目录，
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 3000,
        historyApiFallback: true,
        proxy: {
            "/api":"http://localhost:3000"
        }

    }

})