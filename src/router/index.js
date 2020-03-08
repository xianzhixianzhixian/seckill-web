import Vue from 'vue'
import Router from 'vue-router'
import SeckilHot from '@/components/SeckilHot'
import SeckilNews from '@/components/SeckilNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/seckilHot',
      name: 'SeckilHot',
      component: SeckilHot
    },{
      path: '/seckilNews',
      name: 'SeckilNews',
      component: SeckilNews
    }
  ]
})
