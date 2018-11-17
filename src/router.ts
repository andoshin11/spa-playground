import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: () => import('@/pages/Movie.vue')
    }
  ]
})
