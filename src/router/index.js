import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Articles from '@/components/articles/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    }
  ]
})
