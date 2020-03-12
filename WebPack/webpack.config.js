const path = require('path')
// 打包命令默认的是 npx webpack
// 启动静态服务器的命令默认是：npx webpack-dev-server
// 可以在package.json文件里面的scripts字段来自定义启动命令
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 自动建立一个HTML模板，把打包好的JS插入到这个模板中，就是就打包HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 抽离css样式的插件，把css抽离成单个文件
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const ugly = require('uglifyjs-webpack-plugin')
module.exports = {
  optimization: {     //一些优化项。比如添加一些可以压缩css和js的插件
    minimizer: [
      new OptimizeCss(),
      new ugly({
        cache: true,     //是否开启缓存
        parallel: true,  //是否并发打包
        sourceMap: true  //是否开启映射
      })
    ]
  },
  devServer: {   //开发服务器的配置，把生成的打包文件写入内存中
    port: 3000,
    contentBase: './dist'  //以那个文件打包来启动静态服务
  },
  mode:'development', //可以有两种选择 development or production
  entry:'./src/index.js',  //入口
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'/dist')
  },
  plugins: [       //放置所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',   //入口
      filename: 'index.html',         //目标文件
      minify: {               //设置怎么压缩
        removeAttributeQuotes: true,       //移除双引号
        collapseInlineTagWhitespace: true  //折叠成一行
      },
      hash: true //给文件名加个哈希戳
    }),
    new MiniCssExtractPlugin({
      filename:'main.css'
    })
  ],
  module: {   //用来处理模块的
    rules: [  //用css-loader接续 @import这种语法
      //style-loader 负责把css插入到head标签中
      //loader的特点，希望功能单一
      //多个loader需要用放在一个数组中，从右往左执行loader
      //不用style-loader，不把css插入head标签中，而是解析成css文件
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']}, 
      {test:/\.less$/,use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']},
    ]
  }
}
