import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from 'views/Home.vue'

type RouteConfig = RouteRecordRaw & { hidden?: boolean }

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {
      permission: true,
      icon: '',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ 'views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
