<template>
  <div class="mine">
	  <van-nav-bar
	    left-text="返回"
	    right-text="首页"
	    left-arrow
	    @click-left="onClickLeft"
	    @click-right1="onClickRight"
	  />
	 <div class="head">
		 <h3 class="top">我的主页</h3>
		 <van-image  class="touxiang"
		   round
		   width="6rem"
		   height="6rem"
		   src="https://m.mi.com/static/img/avatar.76a75b8f17.png"
		 />
		 <div>
			 <span class="mes" @click="login">登录</span> <span></span class="mes"> |  <span></span><span class="mes" @click="regist">注册</span>
		 </div>
		
	 </div>
	 <div class="dingdan">
		 <van-nav-bar class="ddzj"
		   left-text="我的订单"
		   right-text="全部订单"
		   @click-right="onClickRight"
		/>
		 
	 </div>
	 <div class="line"><hr color="#D9D9D9"></div>
	 <div class="mon">
		 <van-row >
		   <van-col span="8"><van-icon name="balance-o" class="ic" size="20px" @click="model"/> </van-col>
		   <van-col span="8"><van-icon name="logistics" class="ic" size="20px" @click="model"/></van-col>
		   <van-col span="8"><van-icon name="paid" class="ic" size="20px" @click="model"/></van-col>
		 </van-row>
		 <van-row>
		   <van-col span="8"><span class="sp1" @click="model">待付款</span></van-col>
		   <van-col span="8"><span class="sp1" @click="model">待收货</span></van-col>
		   <van-col span="8"><span class="sp1" @click="model">退换修</span></van-col>
		 </van-row>
		
	 </div>
	 <div><hr color="#D9D9D9" ></div>
		
  </div>
</template>

<script>
	
export default{
	  data() {
	    return {
		  searchResult: []
	    };
	  },
	methods:{
		onClickLeft(){
			this.$router.go(-1);
			// this.$router.go(0);
		},
		onClickRight(){
			this.$router.push("/model")
		},
		onClickRight1(){
			this.$router.push("/")
		},
		login(){
			this.$router.push('/login');
		},
		regist(){
			this.$router.push('/regist')
		},
		model(){
			this.$router.push('/model')
		}
	}
}
</script>
<style scoped="scoped" lang="less">
	.head{
		width: 100%;
		height: 205px;
		background-color:#FF6B00;
		text-align: center;
		.top{
			padding-top: 20px;
		}
		.touxiang{
			margin-top: 15px;
		}
		.mes{
			color: white;
		}
	}

</style>