var path = require('path');
var jqueryPath = path.resolve(__dirname,'node_modules/jquery/dist/jquery.js');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
console.log(process.env.database);
//读取环境变量的值，并且设置到window也就是全局对象下面
var definePlugin = new webpack.DefinePlugin({
    __DEV_DB__:process.env.devdb == 'yes'
})
function rewriteUrl(replacePath){//替换后的路径 /users.json
    return function(req,opt){
        var index = req.url.indexOf('?');//取得？的索引
        var query = index>=0?req.url.substr(index):'';//取得查询字符串
        //用替换后的路径名+查询字符串替换原来的URL路径
        // req.path=/api/users
        // opt.path=/^\/api\/(.*)/
        // replacePath= users.json
        // => /api/users.json
        // http://localhost:8080/api/users.json
        req.url =  req.path.replace(opt.path,replacePath)+query;
    }
}
module.exports = {
    //指定入口文件 使用绝对路径
    //entry:path.resolve(__dirname,'src/index.js'),
    //多入口
    entry:path.resolve(__dirname,'src/index.js'),
    output:{//配置打包结果
        path:path.resolve(__dirname,'build'),//指定输出文件的目录
        filename:'bundle.js' // 指定输出文件的名称,[name]指的是 entry的key
    },
    devServer:{
        inline:true,//当源文件发生变化之后自动编译并自动刷新浏览器
        stats:{colors:true},//显示颜色
        port:8080,//端口号
        contentBase:'build',//静态文件主目录
        //代理服务器接口 实现URL的重写
        proxy:[
            {  // req.url > pathname
                path:/^\/api\/(.*)/,//正则会匹配真实的URL路径
                target:'http://localhost:8080',//目标域名和端口 目标服务
                rewrite:rewriteUrl('/$1\.json')
            }
        ]
    },
    resolve:{
        extensions:["",".js",".css",".less"],
        alias:{
            'jquery':jqueryPath //加快查找速度
        }
    },
    module:{ //配置模块
        loaders:[//配置加载器
            {
                test:/\.js$/, // 指定文件名的正则
                loader:'babel?presets[]=es2015', // 对正则的加载此loader
                exclude:/node_modules/, //排除指定的文件夹，对此文件夹下的文档不解析
                include:/src/ //只解析指定目录下面的文件
            },
            {
                test:/\.less$/,
                loader:'style!css!less'
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(woff|woff2|ttf|svg|eot)/,
                loader:"url?limit=10000"
            },
            {
                test:/\.(jpg|png|gif|bmp)/,
                loader:"url?limit=10000"
            },
            {
                test: /jquery.js$/,
                loader:"expose?jQuery"
            }
        ],
        noParse:[jqueryPath] //对于第三方的JS文件，不需要解析

    },
    plugins:[
    /**
     * 此插件用于自动生成html页面
     * 以template作为模板，然后把生成的js脚本作为script标签引入页面中，默认情况会引入所有的入口文件
     * 但我们可以通过指定chunks属性来指定要插入的打包后的文件
     */
        new htmlWebpackPlugin({
            title:"珠峰react",
            template:'./src/index.html'
            //chunks:['main'] //这里放的是entry的key
        }),
        new openBrowserWebpackPlugin({ url: 'http://localhost:8080' }),
        definePlugin
    ]
}