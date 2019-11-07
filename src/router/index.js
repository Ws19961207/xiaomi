import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catagory from '../views/Catagory.vue'
import Product from '../views/Product.vue'
import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Mycenter from '../views/Mycenter.vue'
import model from '../views/model.vue'
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
    path: '/model',
    name: 'model',
    component: model,
  	meta:{
  		show:false
  	}
  },
  {
    path: '/mycenter',
    name: 'mycenter',
    component: Mycenter,
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
		auth:true,
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
import store from '../store'
const router = new VueRouter({
  routes
})

router.beforeEach((toRouter,fromRouter,next)=>{
	console.log(toRouter.meta.auth);
	if(toRouter.meta.auth){
		console.log("222")
		if(store.getters.getxianshi){
			console.log("++");
			next();
		}else{
			console.log("11");
			next(`/login?redirect=${toRouter.path}`);
		}
	}else{
		console.log("333")
		next();
	}

})





export default router
