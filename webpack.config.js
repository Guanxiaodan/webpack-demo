const htmlWebpackPlugin = require('html-webpack-plugin'); // commonjs的写法  这个插件的作用是在index.html中动态改变script标签中引入的webpack打包好的最新bundle
const path = require('path');
module.exports={
    entry:{
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js'
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            filename:'index-[hash].html',
            template:'index.html' // 为啥这里只写个index.html就默认的是根目录下的呢？这里有个运行环境上下文的概念，上下文的默认值就是运行这个脚本的目录，我们一般会在根目录运行脚本，所以这个上下文就是根目录
        })
    ]
}