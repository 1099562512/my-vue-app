## postCss
工作内容: 保证css内容在各个浏览器上执行起来万无一失
css有很多新特性，为了浏览器的兼容性，可能需要做一些降级处理，添加前缀

我们写得css代码（嵌套函数、变量、高级特性等）-----> 【去将语法进行编译生成原生css，less sass等预处理器也可以做】-----> 再次对未来的高级语法继续降级 -----> 前缀补全 -----> 浏览器客户端

## 使用postCss
1. 安装依赖
```
yarn add postcss-cli postcss -D
```
2.  书写描述文件
创建postcss.config.js, 看官网[postcss Github](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)
