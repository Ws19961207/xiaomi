import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catagory from '../views/Catagory.vue'
import Product from '../views/Product.vue'
import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		show:true
	}
  },
  {
    path: '/catagory',
    name: 'catagory',
    component: Catagory,
	meta:{
		show:true
	}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  	meta:{
  		show:false
  	}
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist,
  	meta:{
  		show:false
  	}
  },
  {
    path: '/carts',
    name: 'carts',
    component: Carts,
  	meta:{
  		show:true
  	}
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
	meta:{
		show:false
	}
  },
  {
    path: '/mine',
    name: 'mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
