import Vue from 'vue'
import Router from 'vue-router'
import LessonsPage from '@/lessons/pages/LessonsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ {
    path: '/*',
    name: 'LessonsPage',
    component: LessonsPage
  }, {
    path: '/messages',
    name: 'MessagesPage',
    component: () => import('@/messages/pages/MessagesPage')
  }, {
    path: '/documents',
    name: 'DocumentsPage',
    component: () => import('@/documents/pages/DocumentsPage')
  }, {
    path: '/user',
    name: 'UserPage',
    component: () => import('@/users/pages/UserPage')
  } ]
})
