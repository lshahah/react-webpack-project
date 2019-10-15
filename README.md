### 技术栈
* React 16
* webpack 4
* React-router-dom 4
* Redux
* React-redux
* Scss
* Css-moudles
* axios

### 项目基于 yarn 包管理工具
### 使用ESlint 作为JS[x]代码规范检查工具 并使用流行规范 Airbnb的代码规范
```base

├── README.md
├── package.json
├── postcss.config.js                  # postcss的基本配置文件
├── src                                # 开发源代码
│   ├── assets                         # 开发使用到的资源文件
│   │   ├── favicons
│   │   ├── icon
|   |   |──images
|   |   └──json
│   ├── components                     # react基础组件存放
│   │   └── Test
│   │       ├── index.css
│   │       └── index.js
│   │── containers                     # react容器组件存放
│   │   └── Home
│   │       ├── home.scss
│   │       └── Home.js
│   │
│   │── reduxs                          # redux
│   │   └── index.js
│   │ 
│   │ 
│   │── scss                           # 基础公共scss
│   │   └── index.scss
│   │ 
│   │ 
│   │── utils                          # 工具
│   │   └── index.js
│   │ 
│   │ 
│   ├── index.scss
│   ├── index.html
│   └── index.js                       # react入口的文件
│ 
├── .babelrc
├── .eslint.js
├── .eslintignore
├── .gitignore
│── yarn.lock
├── webpack.base.config.js      #webpack基础配置
├── webpack.dev.config.js       # 开发环境的webpack配置
├── webpack.dll.config.js       # 抽离静态公共资源打包配置            
└── webpack.pro.config.js       # 生产环境的webpack配置


```
## 项目搭建流程
1. git clone **** 到本地
2. cd ****  进入项目目录
3. 执行 cnpm install 下载项目依赖 （注意：node-sass模块下载缓慢，如果下载失败请先翻墙再下载）
4. yarn run dev  开启本地服务运行项目 项目地址为： http://localhost:3000；
   yarn run build:dll 抽离静态公共资源，（在run build前一步执行）；
   yarn run build 打包生产环境的压缩包，供上线使用；
  
