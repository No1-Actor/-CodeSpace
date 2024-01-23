const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css分离
const { VueLoaderPlugin } = require('vue-loader')// vue-loader插件

module.exports = {
    mode: 'development', // 开发模式
    entry: { // 入口文件
        main: './src/main.js'
    },
    output: { // 输出路径
        path: path.resolve(__dirname, './dist'), //__dirname 当前目录下
        filename: 'js/chunk-[contenthash].js', // 输出文件名
        clean: true,
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin ({  
            template: './public/index.html', // 模板文件
            filename: 'index.html', // 输出文件名
            inject: 'body' // 输出位置
        }),
        new MiniCssExtractPlugin({
            filename: 'style/chunk-[contenthash].css', // 输出文件名
            ignoreOrder: true // 忽略顺序
        }),
        new VueLoaderPlugin()// vue-loader插件必须放在最后面加载，否则报错
    ],
    module: { // 模块
        rules: [
            {
                test: /\.css$/, // 匹配css文件
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // 顺序是从右往左生效
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset',
                // parser: {
                //   dataUrlCondition: {
                //     maxSize: 5 * 1024 * 1024
                //   },
                // },
                generator: {
                  filename: 'images/[contenthash][ext][query]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}