<template>
  <div class="mine">
	  <van-nav-bar
	    left-text="返回"
	    right-text="首页"
	    left-arrow
	    @click-left="onClickLeft"
	    @click-right="onClickRight"
	  />
	 <div class="head">
		 <h3 class="top">我的主页</h3>
		 <van-image
		   round
		   width="8rem"
		   height="8rem"
		   src="../assets/img/cat_cute.gif"
		 />
		 <!-- <img src="../assets/img/cat_cute.gif" class="touxiang"> -->
		 <div class="id">
			 <h3>用户名：殇小妖</h3>
		 </div>
	 </div>
	 <div class="address">
	 	<h3 @click="add">地址编辑</h3>
	 </div>
  </div>
</template>

<script>
export default{
	methods:{
		onClickLeft(){
			this.$router.go(-1);
		},
		onClickRight(){
			this.$router.push("/")
		},
		add(){
			
		}
	}
}
</script>
<style scoped="scoped" lang="less">
	.head{
		width: 100%;
		height: 220px;
		background-color:#FF6B00;
		text-align: center;
		.top{
			padding-top: 20px;
		}
		.touxiang{
			padding-top: 20px;
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
		.address{
			padding-top: 20px;
		}
	}
</style>