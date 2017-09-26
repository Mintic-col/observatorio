import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Static from '@/components/Static'
import Chart from '@/components/Chart'
import Survey from '@/components/Survey'
import Links from '@/components/Links'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/page/:section/:subsection', name: 'Static', component: Static, props: true },
    { path: '/chart/:section/:subsection', name: 'Chart', component: Chart, props: true },
    { path: '/survey/:section/:subsection', name: 'Survey', component: Survey, props: true },
    { path: '/links/:section/:subsection', name: 'Links', component: Links, props: true }
  ]
})
