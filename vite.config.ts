import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({mode}: { mode: string }) => defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {  // 别名配置
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets'),
      'common': resolve(__dirname, 'src/common'),
      'components': resolve(__dirname, 'src/components'),
      'router': resolve(__dirname, 'src/router'),
      'styles': resolve(__dirname, 'src/styles'),
      'utils': resolve(__dirname, 'src/utils'),
      'views': resolve(__dirname, 'src/views'),
    },
    extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  server: {
    port: 4000, // 设置服务启动端口
    open: true, // 自动打开
    cors: true, // 允许跨域
    proxy: {  // 代理配置
      '/api': {
        target: 'http://xxx',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  base: mode === 'development' ? './' : (mode === 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xx') // 静态资源路径配置
})
