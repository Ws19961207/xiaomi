import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  name:"",
	  xianshi:false,
	  carts:[],
	  buttom:"home"
  },
  getters:{
  	 getxianshi(state){
  		 return state.xianshi||Cookie.get("xianshi"); 
  	 }
  },
  
  mutations: {
	  getName(state,name){
		  state.name=name;
	  },
	  setxianshi(state,log){
	  		  state.xianshi=log;
	  		  if(log){
	  			  Cookie.set("xianshi",true)
	  		  }else{
	  			  Cookie.remove("xianshi")
	  		  }
	  },
	  addTocarts(state,item){
		  let temp = true;
		  state.carts.forEach((good)=>{
			  if(item.id==good.id){
				  good.num++;
				  temp = false;
			  }
		  })
		  if(temp){
			  state.carts.push(item);
		  }
	  },
	  add(state,item){
		  state.carts.forEach((good)=>{
			  if(good.id==item.id){
				  good.num++;
			  }
		  })
	  },
	  reduce(state,item){
		  let index = state.carts.indexOf(item);
		  state.carts.forEach((good)=>{
			  if(good.id==item.id){
				  good.num--;
				  
				  if(good.num<=0){
					 good.num=1;
				  }
				  
			  }
		  })
	  },
	  del(state,index){
		  state.carts.splice(index,1);
	  },
	  change(state,item){
		  state.buttom=item;
	  }
  },
  actions: {
  },
  modules: {
  }
})
