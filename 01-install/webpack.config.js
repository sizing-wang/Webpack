const path = require('path');

module.exports = {
    // 指定开发环境
    mode:'development',
    // 这里应用程序开始执行
    // webpack 开始打包
    // entry: './src/index1.js', // 单一入口
    // 多入口
    entry: {
        index1: "./src/index1.js",
        index2: "./src/index2.js",
        index3: "./src/index3.js"
    },
    // 出口
    output: {
        // 使用nodejs的绝对路径
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js' // 单出口
        filename: "[name]-[hash]-bundle.js" // 多出口
    },
   module: {
        // 处理css
    rules: [
         {
            test: /\.css$/,
            use: [
             'style-loader',
              'css-loader'
           ]
       },
        // 处理图片
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10 // 当图片大小超过limit值后,会生成一个文件
                    }
                }
            ]
        }
   ]
   }
};


