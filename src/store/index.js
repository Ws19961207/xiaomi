import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  carts:[],
	  buttom:"home"
  },
  mutations: {
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
