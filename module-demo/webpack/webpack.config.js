const path = require('path')
    // 导入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // vue加载器
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', // 模板文件
    filename: 'index.html'
})
module.exports = {
    // 编译模式
    // mode: 'production',
    mode: 'development',
    // 入口
    entry: path.join(__dirname, './src/index.js'),
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlWebpackPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            // { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 打包图片和字体文件
            // { test: /\.(jpg|png|gif|ttf|bmp|woff2)$/, use: ['url-loader'] }
            { test: '/\.vue$/', loader: 'vue-loader' }

        ]
    }
}