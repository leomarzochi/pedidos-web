import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from './../components/user/Register'
import Login from './../components/user/Login'
import Produtos from './../components/produtos/Produtos'
import Pedidos from './../components/pedidos/Pedidos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: Pedidos
    }
  ]
})
