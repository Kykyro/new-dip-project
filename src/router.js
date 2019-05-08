import Vue from 'vue'
import Router from 'vue-router'
import competenceList from '@/views/competencesList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: competenceList
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/competence/:id',
      name: 'competence',
      component: () => import('./views/competence')
    },
    {
      path: '/person/:id',
      name: 'person',
      component: () => import('./views/person')
    },
    {
      path: '/championship/:id',
      name: 'championship',
      component: () => import('./components/championship')
    }
  ]
})
