/** */
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

//按需引入Antd组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

function pathResolve(dir) {
  //process.cwd() 当前env文件所在的目录
  console.log(resolve(process.cwd(), '.', dir));
  return resolve(process.cwd(), '.', dir);
}
export default {
  plugins: [vue(), visualizer(), Components({
    resolvers: [AntDesignVueResolver()]
  })],
  resolve: {
    alias: {
      "@": pathResolve('src'),
      "assets": pathResolve('src/assets'),
      "@v": pathResolve('src/views'),
      "@c": pathResolve('src/components')
    },
    extensions: ['.vue','.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
}