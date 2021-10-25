import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import scripts from './scripts';
import api from './api';
import store from './store/index.js';

import '@/style/index.scss'; // global css

// element-plus
import components from '@/utils/elementPlus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.config.globalProperties.$scripts = scripts;
app.config.globalProperties.$api = api;

components.forEach(component => {
  app.component(component.name, component);
});

app
  .use(router)
  .use(store)
  .mount('#app');
