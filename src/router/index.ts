/*
 * @Author: CenMingGuang
 * @Date: 2022-02-16 10:22:02
 * @LastEditTime: 2022-02-16 10:55:23
 * @LastEditors: CenMingGuang
 * @Description: 路由
 * @FilePath: /vue_ts_cms/src/router/index.ts
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
