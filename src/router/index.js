import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/layout/index.vue';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    isMenu: true,
    meta: {
      title: '首页',
      icon: 'el-icon-folder',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        isMenu: true,
        component: () => import('@/views/home.vue'),
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

// router.beforeEach((to, from, next) => {
//   let accessToken = window.sessionStorage.getItem('accessToken');
//   if (to.path == '/login') {
//     next();
//     return;
//   }
//   if (!accessToken) {
//     next(`/login`);
//     return;
//   }
//   next();
// });

export default router;
