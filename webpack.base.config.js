const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: "./src/index.js",
  output: {
    // 输出目录
    path: path.join(__dirname, "dist"),
    // filename: "js/bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      // 处理scss
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [
          //分离提取css文件
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 通过@import引入css文件时，依然要执行前两个文件
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "fast-sass-loader",
          }, // 将 Sass 编译成 CSS
        ]
      },
      // 处理css资源
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 通过@import引入css文件时，依然要执行前两个文件
            }
          },
          'postcss-loader'
        ],
      },
       // 处理图标文件
       {
        test: /\.(eot|ttf|woff|woff2|svg|svgz)$/,
        use: {
            loader: 'url-loader',
            options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'icons',
                limit: 8192,
            }
        }
     },
      // 处理图片
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name].[hash:7].[ext]',
            outputPath: "images/", // 图片输出的路径
            limit: 8192,
          }
        }
      },
      { //处理ES6，react，vue
        test: /\.m?js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: "happypack/loader?id=happyBabel",
          },
          {
            loader: 'eslint-loader'
          },
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, 'src/index.html'),// 指定模板路径
      favicon: './src/assets/favicons/favicon.ico',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }), //打包抽离css

    new HappyPack({
      id: 'happyBabel',
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true'
      }],
      threadPool: happyThreadPool,
      verbose: true
    })
  ],

  // 路径处理
  resolve: {
    extensions: [".js", ".jsx",],//顺序查找，自动补全后缀
    alias: {
      "@": path.join(__dirname, "src"),
      assets: path.join(__dirname, "src/assets"),
      components: path.join(__dirname, "src/components"),
      containers: path.join(__dirname, "src/containers"),
      reduxs: path.join(__dirname, "src/reduxs")
    }
  },
}
