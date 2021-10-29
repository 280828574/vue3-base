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
  {
    path: '/login',
    component: layout,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/home1',
    component: layout,
    redirect: '/home1',
    meta: {
      title: '首页1',
      icon: 'el-icon-folder',
    },
    children: [
      {
        path: '/home1',
        name: 'home1',
        component: () => import('@/views/Home1.vue'),
        meta: {
          title: '首页1',
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
