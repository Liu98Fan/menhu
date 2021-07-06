import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/overview',
    component: Home,
    children:[
      {
        path:'/overview',
        name:'Overview',
        component: () => import(/* webpackChunkName: "overview" */ '../views/Overview.vue')
      },
      {
        path:'/edit/overview',
        name:'EditOverview',
        component: () => import(/* webpackChunkName: "overview" */ '../views/edit/OverviewEdit.vue')
      },
      {
        path:'/research',
        name:'Research',
        component: () => import(/* webpackChunkName: "research" */ '../views/Research.vue')
      },
      {
        path:'/people',
        name:'People',
        component: () => import(/* webpackChunkName: "people" */ '../views/People.vue')
      },
      {
        path:'/media',
        name:'Media',
        component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue')
      },
      {
        path:'/publications',
        name:'Publications',
        component: () => import(/* webpackChunkName: "publications" */ '../views/Publications.vue')
      },
      {
        path:'/photoGallery',
        name:'PhotoGallery',
        component: () => import(/* webpackChunkName: "photoGallery" */ '../views/PhotoGallery.vue')
      },
      {
        path:'/location',
        name:'Location',
        component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue')
      },
      {
        path:'/funding',
        name:'Funding',
        component: () => import(/* webpackChunkName: "funding" */ '../views/Funding.vue')
      },
      {
        path:'/news',
        name:'News',
        component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
      },
      {
        path:'/calendar',
        name:'Calendar',
        component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
      },
      {
        path:'/login',
        name:'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
