import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Add from '../components/Ads/Add.vue'
import AdList from '../components/Ads/AdList.vue'
import NewAd from '../components/Ads/NewAd.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'
import Orders from '../components/User/Orders.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/new',
      name: 'newAdd',
      component: NewAd
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})