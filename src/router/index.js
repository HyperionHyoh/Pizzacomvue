import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  }
  /*{
    path: '/produtos',
    name: 'Produtos',
    component: () => import('../views/Produtos.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
