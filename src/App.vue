<template>
	
  <div id="app">
	 
	  <div class="buttom-Tabbar">
		  <van-tabbar v-model="active1"  active-color="#07c160" inactive-color="#000">
		    <van-tabbar-item name="home" icon="home-o"  to="/">首页</van-tabbar-item>
		    <van-tabbar-item name="kind" icon="todo-list-o"  to="/catagory">分类</van-tabbar-item>
		    <van-tabbar-item name="cart" icon="shopping-cart-o"  to="/about">购物车</van-tabbar-item>
		    <van-tabbar-item name="mine" icon="friends-o"  to="/about">我的</van-tabbar-item>
		  </van-tabbar>  
	  </div>

      <router-view></router-view>
  </div>
</template>


<script>
	export default {
	  data() {
	    return {
	      active1:'home',

	    }
	  }
	}
</script>


<style >

</style>
