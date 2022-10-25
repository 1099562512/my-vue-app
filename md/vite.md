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


打包后的静态资源为什么要有hash
浏览器是有一个缓存机制的，静态资源只要不改， 就会直接用缓存

## 前端性能优化
- 开发时构建速度优化
  - webpack cache-loader、 thread-loader
  - vite是按需加载
- 页面性能指标
  - 首屏加载时间
    - 懒加载
    - http优化：协商缓存和强缓存
      - 强缓存： 服务端给响应头追加一些字段（expires）， 客户端会记住这些字段，在expires（失效时间）没有到达之前，都不会重新发送请求，而是重新请求页面
      - 协商缓存：服务端根据资源更新情况决定是否用缓存还是重新请求
  - 页面中最大元素的一个时长
  - js逻辑
    - 注意副作用的清除： 比如setInterval、事件监听
    - 浏览器的帧率： 16.6ms去更新一次（执行js逻辑 以及 重排重绘...）requestAnimationFrame(绘制之前执行)、requestIdleCallback(绘制之后执行)

- 构建的优化： vite(rollup) webpack
  - 优化体积：压缩、treeshaking、图片资源压缩、cdn加载、分包 ...

### 分包策略
