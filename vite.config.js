import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite' // element plus 自动引入
import Components from 'unplugin-vue-components/vite' // element plus 自动引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // element plus 自动引入
import OptimizationPersist from 'vite-plugin-optimize-persist' // 启动优化
import PkgConfig from 'vite-plugin-package-config' // 启动优化

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ['vue', 'vue-router', 'vuex'],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver()], // element plus 自动引入
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/', 'src/views/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue'],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      resolvers: [ElementPlusResolver()],
    }),
    PkgConfig(), //启动优化
    OptimizationPersist(), //启动优化
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_HYDRATION__: true,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/index.scss" as *;`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  server: {
    port: 9527, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: '', // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false, // 支持https
        logLevel: 'debug',
      },
    },
  },
})
