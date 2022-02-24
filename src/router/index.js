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
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/userManage',
    component: layout,
    redirect: '/policed',
    meta: {
      title: '人员管理',
      icon: 'el-icon-folder',
    },
    children: [
      {
        path: '/policed',
        name: 'policed',
        component: () => import('@/views/user/policed/list.vue'),
        meta: {
          title: '巡查人员',
        },
      },
      {
        path: '/assess',
        name: 'assess',
        component: () => import('@/views/user/assess/list.vue'),
        meta: {
          title: '考核人员',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
