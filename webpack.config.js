const htmlWebpackPlugin = require('html-webpack-plugin'); // commonjs的写法  这个插件的作用是在index.html中动态改变script标签中引入的webpack打包好的最新bundle
const path = require('path');
module.exports={
    entry:{
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/' // 相当于占位符，当需要上线时，在HTML文件引用的js文件中，路径会被替换为以publicPath开头的路径：比如现在是开发环境<script tyle="text/javascript" src="js/a-e6db3441f0977cf6d1ac.js"></script>  加上了publicpath就是<script tyle="text/javascript" src="http://cdn.com/js/a-5134b86ba7375d595584.js"></script>
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html', // 根据template模板打包出来的index.html
            template:'index.html', // 为啥这里只写个index.html就默认的是根目录下的呢？这里有个运行环境上下文的概念，上下文的默认值就是运行这个脚本的目录，我们一般会在根目录运行脚本，所以这个上下文就是根目录
            title:'this is a.html',
            inject:false,
            chunks: ['main', 'a'],
            inject: 'body', // 将script标签注入到body中
        }),
        new htmlWebpackPlugin({
            filename:'b.html', // 根据template模板打包出来的index.html
            template:'index.html', // 为啥这里只写个index.html就默认的是根目录下的呢？这里有个运行环境上下文的概念，上下文的默认值就是运行这个脚本的目录，我们一般会在根目录运行脚本，所以这个上下文就是根目录
            title:'this is b.html',
            inject:false,
            chunks: ['b'],
            inject: 'body',
        }),
        new htmlWebpackPlugin({
            filename:'c.html', // 根据template模板打包出来的index.html
            template:'index.html', // 为啥这里只写个index.html就默认的是根目录下的呢？这里有个运行环境上下文的概念，上下文的默认值就是运行这个脚本的目录，我们一般会在根目录运行脚本，所以这个上下文就是根目录
            title:'this is c.html',
            inject:false,
            chunks: ['c'],
            inject: 'body',
        })
    ]
}