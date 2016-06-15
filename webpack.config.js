var path = require('path');
module.exports = {
    //指定入口文件 使用绝对路径
    entry:path.resolve(__dirname,'app/index.js'),
    output:{//配置打包结果
        path:path.resolve(__dirname,'build'),//指定输出文件的目录
        filename:'bundle.js' // 指定输出文件的名称
    }
}