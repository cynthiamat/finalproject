import Vue from 'vue'
import Router from 'vue-router'
import CreateCard from './views/CreateCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'createcard',
      component: CreateCard
    },
    {
      path: '/cardiventory',
      name: 'cardiventory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CardInventory.vue')
    }
  ]
})
