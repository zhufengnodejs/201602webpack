#创建项目
```javascript
mkdir 201602webpack && cd 201602webpack  创建目录并进入此目录
touch README.md .gitignore  创建两个空文件
npm init -y                   生成项目配置文件package.json
```
> 如果不能在cmd下使用touch命令(创建新的空文件)，则需要把git所在目录配置到环境变量中
C:\Program Files\Git\usr\bin

## 初始化git
```javascript
sh git add -A
sh git commit -m"init"
sh git remote add origin git@github.com:zhufengnodejs/201602webpack.git
sh git push -u origin master
```

##安装webpack
```
$ npm install webpack -g
$ npm install webpack --sav
```

##命令行中使用
```
$   webpack app/index.js build/bundle.js
$   webpack app/index.js build/bundle.js -p -w -d --progress --display-error-details --profile
```
> 把源代码打包成 目标代码


##loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-preset-stage-0 --save-dev
```
```
babel-loader babel 加载器
babel-core babel 核心模块
babel-preset-es2015 把es6代码转成es5代码的预设
babel-preset-stage-0 把es7代码转成es5代码的预设
state-0 最新最全最不成熟
```


#区分生产环境和开发环境
1. 他们连接数据库可能不一样
2. 有些调试信息我们希望只在开发环境中打印输出
输出一些任务的中间状态，

- 如何在windows下mac下设置环境变量 
    `win set key=value mac export key=value`
- 如果在node中读取环境变量的值
    `process.env.key`
- 如果定义全局对象下的全局变量 definePlugin
    '{key:process.env.key == 'key'}'
- 如何在js中使用这个全局变量
    在JS脚本中直接使用key

只安装生产依赖
npm install --product


#提取css文件
1. 指定抽取的文件
2. 指定生成打包CSS文件
3. 把生成的CSS文件插入到html当中去