var path = require('path');
function rewriteUrl(replacePath){//替换后的路径 /users.json
    return function(req,opt){
        var index = req.url.indexOf('?');//取得？的索引
        var query = index>=0?req.url.substr(index):'';//取得查询字符串
        //用替换后的路径名+查询字符串替换原来的URL路径
        // req.path=/api/users
        // opt.path=/^\/api\/(.*)/
        // replacePath= users.json
        // => /api/users.json
        // http://localhost:8080/api/user.json
        req.url =  req.path.replace(opt.path,replacePath)+query;
    }
}
module.exports = {
    //指定入口文件 使用绝对路径
    entry:path.resolve(__dirname,'src/index.js'),
    output:{//配置打包结果
        path:path.resolve(__dirname,'build'),//指定输出文件的目录
        filename:'bundle.js' // 指定输出文件的名称
    },
    devServer:{
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
    module:{ //配置模块
        loaders:[//配置加载器
            {
                test:/\.js$/, // 指定文件名的正则
                loader:'babel?presets[]=es2015', // 对正则的加载此loader
                exclude:/node_modules/, //排除指定的文件夹，对此文件夹下的文档不解析
                include:/src/ //只解析指定目录下面的文件
            }
        ]

    }
}