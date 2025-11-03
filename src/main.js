import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import api from '@/api'
import directives from './directives/index.js' // 自定义指令
import scripts from './scripts/index.js' // scripts
import constant from './constant/index.js' // scripts
import { createPinia } from 'pinia'
import stores from './store/index'

// 导入 Element Plus 样式
import 'element-plus/theme-chalk/index.css'
import * as ElIconModules from '@element-plus/icons-vue' //导入所有element icon图标
import { Menu as MenuIcon } from '@element-plus/icons-vue'
const app = createApp(App) // 初始化app

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

// 挂载全局
app.config.globalProperties.$scripts = scripts
app.config.globalProperties.$api = api
app.config.globalProperties.$constant = constant
app.config.globalProperties.$stores = stores
directives(app) //载入自定义指令
app.use(router).use(createPinia()).mount('#app')
//屏蔽错误信息
// app.config.errorHandler = () => null
//屏蔽警告信息
// app.config.warnHandler = () => null
