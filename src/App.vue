<template>
	
  <div id="app">
	 
	 <div class="buttom-Tabbar" v-show="$route.meta.show==true">
		  <van-tabbar v-model="active1"  active-color="#07c160" inactive-color="#000">
		    <van-tabbar-item name="home" icon="home-o"  to="/">首页</van-tabbar-item>
		    <van-tabbar-item name="kind" icon="todo-list-o"  to="/catagory">分类</van-tabbar-item>
		    <van-tabbar-item name="cart" icon="shopping-cart-o"  to="/carts">购物车</van-tabbar-item>
			 <van-tabbar-item name="mine" icon="friends-o"  to="/mine" v-show="!this.$store.state.xianshi">我的</van-tabbar-item>
		    <van-tabbar-item name="mycenter" icon="friends-o"  to="/mycenter" v-show="this.$store.state.xianshi">我的主页</van-tabbar-item>
		  </van-tabbar>  
	  </div>

      <router-view></router-view>
  </div>
</template>


<script>
	export default {
	  data() {
	    return {
	      active1:0
	    }
	  }
	}
</script>


<style >

</style>
