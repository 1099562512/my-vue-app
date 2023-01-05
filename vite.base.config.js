//该配置文件是由node运行的, 所以可以访问process、__dirname
import vue from '@vitejs/plugin-vue'
//import { visualizer } from 'rollup-plugin-visualizer' //查看资源占比插件

import { viteMockServe } from 'vite-plugin-mock'

//按需引入Antd组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers' //按需加载antd插件

import { resolve } from 'path'
import path from 'path-browserify'

function pathResolve(dir) {
  //process.cwd() 当前文件执行根目录， __diename 当前文件执行目录
  //console.log(resolve(process.cwd(), '.', dir));
  return resolve(process.cwd(), '.', dir);
}

export default {
  plugins: [
    vue(), 
    viteMockServe(),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      path: 'path-browserify',
      "@": pathResolve('src'),
      "@u": pathResolve('src/utils'),
      "assets": pathResolve('src/assets'),
      "@v": pathResolve('src/views'),
      "@c": pathResolve('src/components'),
      "@api": pathResolve('src/api')
    },
    //extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    proxy: {
      '/live': {
        target: 'http://192.168.2.104',
        changeOrigin: true
      }
    }
  },
  build: {
    //minify: false, //关闭混淆
    rollupOptions: { //配置rollup的一些构建策略
      output: { //控制输出
        //assetFileNames: "[hash].[name].[ext]" //控制打包文件名称
        manualChunks: (id) => {
          //id：引用文件的绝对路径
          if(id.includes("node_modules")) {
            return "vendor"
          }
        }
      }
    },
    //assetsInlineLimit: 4096, //4kb 如果图片小于4kb就打包成base64字符串，这样可以减少请求数
    //outDir: "", //打包后的目录名称，默认dist
    //assetsDir: "" //打包后的静态资源目录
  }
}