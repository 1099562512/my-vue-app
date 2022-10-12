import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'; //基础配置
import viteProdConfig from './vite.prod.config'; //生产环境配置
import viteDevConfig from './vite.dev.config' // 开发环境配置

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
  console.log(process.cwd());
  //直接找到env， 再
  const env = loadEnv(mode, process.cwd(), '')
  return envResolver[command]()
})

// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve('src'),
      "assets": pathResolve('src/assets'),
      "@v": pathResolve('src/views'),
      "@c": pathResolve('src/components')
    },
    extensions: ['.vue','.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    'process.env': {
      'BASE_API':"http://localhost:8021/api"
    }
  },
  css: {
    devSourcemap: true
  },
  optimizeDeps: {  //预构建的依赖项配置
    exclude: [] //
  }
}) */
