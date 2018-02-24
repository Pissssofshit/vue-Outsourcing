import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/pages/Mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainpage',
      component: Mainpage
    }
  ]
})
