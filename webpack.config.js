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
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1, // 这个数组是几根据cssloader后面的loader的数量保持一致就行，比如现在css-loader后面只有一个postcss-loader,所以就写1
                        }
                    },
                    {
                        loader: 'postcss-loader', // 功能非常强大，有很多插件可以使用
                        options:{
                            ident: 'postcss',
                            plugins:[
                                require('autoprefixer')({browsers:['last 5 versions']})  // autoprefixer: 给浏览器加前缀
                            ]
                        }
                    }
                ],
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1, // 这个数组是几根据cssloader后面的loader的数量保持一致就行，比如现在css-loader后面只有一个postcss-loader,所以就写1
                        }
                    },
                    {
                        loader: 'postcss-loader', // 功能非常强大，有很多插件可以使用
                        options:{
                            ident: 'postcss',
                            plugins:[
                                require('autoprefixer')({browsers:['last 5 versions']})  // autoprefixer: 给浏览器加前缀
                            ]
                        }
                    },
                    'less-loader'
                ],
            },
        ]
    }
}