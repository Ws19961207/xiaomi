<template>
	<div class="login">
		<div class="top">
			<van-nav-bar
			  left-text="返回"
			  right-text="首页"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
		<div><hr color="#E6E6E6"></div>
		<div class="bank">
			<div class="pict">
				<img src="../assets/img/mi.png" alt="">
			</div>
			<div class="dic">
				<h3>小米账号登录</h3>
			</div>
			
		</div>
		<div class="content">
			<van-cell-group>
			  <van-field
			    v-model="username"
			    required
			    clearable
			    label="用户名"
			    right-icon="question-o"
			    placeholder="请输入用户名"
			    @click-right-icon="$toast('question')"
			  />
			
			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    placeholder="请输入密码"
			    required
			  />
			</van-cell-group>
		</div>
		<div class="but0">
			<button class="but" @click="login">登录</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			onClickRight(){
				this.$router.push('/');
			},
			login(){
				
			}
		}
	}
</script>

<style>
</style>
