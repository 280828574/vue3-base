import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 路由
import scripts from './scripts'; // 函数
import api from './api'; // 接口
import store from './store/index.js'; // vuex

import '@/style/index.scss'; // global css

import directives from './directives/index.js'; // 自定义指令

const app = createApp(App); // 初始化app

// 挂载全局
app.config.globalProperties.$scripts = scripts;
app.config.globalProperties.$api = api;

// element-plus
import { components, plugins } from '@/utils/elementPlus';
import 'element-plus/dist/index.css';
components.forEach(component => {
  app.component(component.name, component);
});
plugins.forEach(plugin => {
  app.use(plugin);
});

directives(app); //载入自定义指令

app
  .use(router)
  .use(store)
  .mount('#app');
