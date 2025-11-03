import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index.vue'

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
    },
    children: [
      {
        path: '/home',
        name: 'home',
        isMenu: true,
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    path: '/importFile',
    component: layout,
    redirect: '/importFile',
    isMenu: true,
    meta: {
      title: '远程加载文件',
    },
    children: [
      {
        path: '/importFile',
        name: 'importFile',
        isMenu: true,
        component: () => import('@/views/importFile.vue'),
        meta: {
          title: '远程加载文件',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    path: '/imgs',
    component: layout,
    redirect: '/imgs/list',
    isMenu: true,
    meta: {
      title: '图片管理',
      icon: 'Postcard',
    },
    children: [
      {
        path: '/imgs/list',
        name: 'imgsList',
        isMenu: true,
        component: () => import('@/views/imgs/list.vue'),
        meta: {
          title: '图片管理',
          icon: 'Postcard',
        },
      },
      {
        path: '/imgs/categroy',
        name: 'imgsCategroy',
        isMenu: true,
        component: () => import('@/views/imgs/categroy.vue'),
        meta: {
          title: '图片分类',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach((to, from, next) => {
  let accessToken = window.sessionStorage.getItem('accessToken')
  //   if (to.path == '/login') {
  //     next()
  //     return
  //   }
  //   if (!accessToken) {
  //     next(`/login`)
  //     return
  //   }
  next()
})

export default router
