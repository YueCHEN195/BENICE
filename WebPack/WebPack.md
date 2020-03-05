# webpack笔记

## 1 webpack基本功能

代码转换，把高级的语法转换为浏览器兼容的低级语法。
文件优化，合并文件，压缩体积
代码分割
模块合并
开发环境，服务器
自动发布

## 2 webpack可以进行0配置

打包命令 npx webpack
入口文件（src/index.js）=>目标文件（dist/bundle.js）
所有的JS代码都会打包成一个文件

## 3 手动配置webpack

在当前目录下的webpack.config.js里面配置
注意：当package.json与package-lock.json都不存在，执行"npm install"时，node会重新生成package-lock.json文件，然后把node_modules中的模块信息全部记入package-lock.json文件，但不会生成package.json文件，此时，你可以通过"npm init --yes"来初始化生成package.json文件。
没有package.json可以通过 npm init --yse 来生成

## 4 