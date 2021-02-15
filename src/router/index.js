import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/login/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router