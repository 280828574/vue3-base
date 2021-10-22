import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import scripts from './scripts';
import api from './api';
import store from './store/index.js';
import '@/style/index.scss'; // global css

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.config.globalProperties.$scripts = scripts;
app.config.globalProperties.$api = api;
app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app');
