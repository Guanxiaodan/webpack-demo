const htmlWebpackPlugin = require('html-webpack-plugin'); // commonjs的写法  这个插件的作用是在index.html中动态改变script标签中引入的webpack打包好的最新bundle   https://www.npmjs.com/package/html-webpack-plugin
const path = require('path');
module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'js/[name].bundle.js',
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        }),
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader'],
            }
        ]
    }
}