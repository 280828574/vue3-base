import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import api from '@/api';
import directives from './directives/index.js'; // 自定义指令
import store from './store/index.js'; // vuex
import scripts from './scripts/index.js'; // scripts

import 'element-plus/theme-chalk/src/message.scss';

import * as ElIconModules from '@element-plus/icons'; //导入所有element icon图标
import { Menu as MenuIcon } from '@element-plus/icons-vue';
const app = createApp(App); // 初始化app

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}

// 挂载全局
app.config.globalProperties.$scripts = scripts;
app.config.globalProperties.$api = api;
directives(app); //载入自定义指令
app.use(router).use(store).mount('#app');
