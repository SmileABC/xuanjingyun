import Vue from 'vue'
import Router from 'vue-router'
import Pandect from '@/components/Pandect/Pandect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pandect',
      component: Pandect
    }
  ]
})
