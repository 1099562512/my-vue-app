/** */
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
function pathResolve(dir) {
  //process.cwd() 当前env文件所在的目录
  console.log(resolve(process.cwd(), '.', dir));
  return resolve(process.cwd(), '.', dir);
}
export default {
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
}