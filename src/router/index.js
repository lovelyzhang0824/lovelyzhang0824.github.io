import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import User from '../views/User.vue'
import Fav from '../views/Fav.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/f',
    name:'Fav',
    component:Fav
  },{
    path:'/u',
    name:'Me',
    component:User
  },{
    path:'/h',
    name:'Hot',
    component:Hot
  }
]

const router = new VueRouter({
  routes
})

export default router
