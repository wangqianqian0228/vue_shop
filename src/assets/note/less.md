## less的安装与使用
1. 使用命令行安装less
   `npm install less less-loader --save-dev`
2. 安装成功后，打开build/webpack.base.conf.js ，在 module.exports = 的对象的module.rules 后面添加一段
   ```js
        module: {
        rules: [
        // 此处省略无数行，已有的的其他的规则
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader",
        }
        ]
        }
   ```
3. 最后，在代码中的style标签中加上lang="less"属性即可
4. 注意：错误代码：is deprecated; we now treat it as { parser: "babel" }.
   错误代码：loaderContext.getResolve is not a function
   都是less版本太高的原因
   解决方法：在package.json文件里面修改less和less-loader的版本号
   ```
   "less": "^3.9.0",
   "less-loader": "^5.0.0",
   ```
   特别注意：因为改了版本号，所以需要删除该项目的依赖包，重新安装：npm install