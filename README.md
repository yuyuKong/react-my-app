### generator-react-webpack脚手架安装
优势：
相对于creat-react-app，这个更好配置webpack

构建工具generator-react-webpack，它是需要yeoman的支持的 

- npm install -g yo
- npm install -g generator-react-webpack
- mkdir new-react-demo 
- cd new-react-demo 
- yo react-webpack 
- npm start 

安装过程中选项：

1.项目名称注意可能不支持大写，所以用小写字母加“-”的方式进行命名

2.选择css

3.是否使用Enable postcss   ，这里选择“Y”，因为这里使用了webpack

目录结构
package.json    命令
webpack.config.js    webpack配置，注意这个文件用的模块引入的，其实配置写在cfg(config)里面

路由
npm install --save react-router react-router-dom安装其中一个
