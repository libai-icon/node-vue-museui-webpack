import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'

import index from '@/module/index/index'
import sendBack from '@/module/sendBack/sendBack'
import chooseBed from '@/module/sendBack/chooseBed'
import orderDetail from '@/module/order/orderDetail'
import orderFol from '@/module/order/orderFol'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Main,
      children:[
          {
            path: 'index',
            name: 'index',
            component: index
          },
        {
          path: 'sendBack',
          name: 'sendBack',
          component: sendBack
        },
        {
          path: 'chooseBed',
          name: 'chooseBed',
          component: chooseBed
        },
        {
          path: 'orderDetail',
          name: 'orderDetail',
          component: orderDetail
        },
        {
          path: 'orderFol',
          name: 'orderFol',
          component: orderFol
        },
          {
            path: '',
            name: 'main',
            component: index
          }
      ]
    }
  ]
})
