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
				<h3>小米账号注册</h3>
			</div>
			
		</div>
		<div class="content">
			<van-cell-group>
			  <van-field
			    v-model="username"
			    label="用户名"
			    placeholder="请输入用户名"
			  />
			
			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    placeholder="请输入密码"
			    required
			  />
			  <van-field
			    v-model="password1"
			    type="password"
			    label="确认密码"
			    placeholder="请再次输入密码"
			    required
			  />
			</van-cell-group>
		</div>
		<div class="but0">
			<button class="but" @click="regist">注册</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	export default{
		data(){
			return {
				username:"",
				password:"",
				password1:""
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			onClickRight(){
				this.$router.push('/');
			},
			regist(){
				if(this.username==""||this.password==""||this.password1==""){
					Toast("输入信息不能为空")
				}else if(this.password!=this.password1){
					Toast("输入密码不一致")
				}else{
					this.$http({
						url:"",
						method:"",
						
					}).then((res)={
						
					})
				}
				
			}
			
		}
	}
</script>

<style>
</style>
