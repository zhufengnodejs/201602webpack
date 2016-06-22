var path = require('path');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry:path.resolve(__dirname,'react/index.js'),
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    devServer:{
        inline:true,//当源代码发生变化之后自动刷新浏览器
        port:8080,
        contentBase:'./build'//服务器文件的根目录
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel?presets[]=es2015&presets[]=react',
                exclude:/node_modules/,
                include:path.resolve(__dirname,'react')
            }
        ]
    },
    plugins:[
        new openBrowserWebpackPlugin({ url: 'http://localhost:8080' })
    ]
}