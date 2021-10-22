import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/layout/index.vue';
const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'el-icon-folder',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
