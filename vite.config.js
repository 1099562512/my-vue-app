import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'; //基础配置
import viteProdConfig from './vite.prod.config'; //生产环境配置
import viteDevConfig from './vite.dev.config' // 开发环境配置

const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')

const envResolver = {
  'build': () => {
    console.log('生产环境');
    return {...viteBaseConfig, ...viteProdConfig}
  },
  'serve': () => {
    console.log('开发环境');
    return {...viteBaseConfig, ...viteDevConfig}
  }
}

export default defineConfig(({command, mode, ssrBuild}) => {
  //command: 'serve'开发环境下  'build' 生产环境下 
  /**
   * mode
   * yarn dev --mode develoment默认， 会将mode设置为development
   * yarn build --mode production默认
   * 
   */
  //console.log(process.cwd());
  //直接找到env， 再找环境.env
  const env = loadEnv(mode, process.cwd(), '')
  return {
    ...envResolver[command](),
    ...{
      optimizeDeps: {
        exclude: [] //将指定数组中的依赖不进行依赖预构建
      },
      //envPrefix: "", //配置vite注入客户端环境变量(import.meta.env)校验的env前缀, 默认VITE_
      css: {
        modules: { //对css模块化的默认行为进行覆盖配置,最终会传给
          localsConvention: 'camelCaseOnly', //修改生成配置对象的key的展示形式（驼峰还是中划线形式）
          scopeBehavior: "local", //配置当前的模块化行为是模块化local还是全局化global（关闭模块化）
          genrateScopedName: "[name]_[local]_[hash:5]", //生成类名规则
          hashPrefix: "", //哈希前缀
          globalModulePaths: [] //不想参与css模块化的路径
        },
        preprocessorOptions: { //key + config, key代表预处理器的名
          less: { //整个配置对象都会最终给到less的执行参数中去
            //在webpack里给less-loader配置就好了
            math: "always",
            globalVars: { //全局变量
              mainColor: "red"
            } 
          }, 
          sass: {}
        },
        devSourcemap: true, //开启css文件的索引, 文件压缩混淆之后会丧失正常的位置信息, 开启后可以看到正确的错误信息（开发环境开启，生产环境关闭）
        postcss: {
          plugins: [postcssPresetEnv({
             //让postcss去知道， 有一些变量它需要记下来，兼容低版本浏览器
            importFrom: path.resolve(__dirname, "./src/design/var/globalVariable.css")
          })]
        }
      },
      server: {
        proxy: {
          
        }
      }
    }
  }
})