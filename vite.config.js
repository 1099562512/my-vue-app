import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir) {
  console.log(resolve(process.cwd(), '.', dir));
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({command, mode, ssrBuild}) => {
  //command: 'serve'开发环境下  'build' 生产环境下
  if(command === 'serve') {
    console.log(command, mode);
    return {
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
  }else {
    return {
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
  }
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
  optimizeDeps: {
    exclude: [] //
  }
}) */
