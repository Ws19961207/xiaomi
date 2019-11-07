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
			    v-model="user.username"
			    label="用户名"
			    placeholder="请输入用户名"
			  />
			
			  <van-field
			    v-model="user.password"
			    type="password"
			    label="密码"
			    placeholder="请输入密码"
			    required
			  />
			  <van-field
			    v-model="user.password1"
			    type="password"
			    label="确认密码"
			    placeholder="请再次输入密码"
			    required
			  />
			  <van-field
			    v-model="user.email"
			    type="email"
			    label="email"
			    placeholder="请输入邮箱"
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
				user:{	
				username:"",
				password:"",
				password1:"",
				email:"",
				}
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
				if(this.user.username==""||this.user.password==""||this.user.password1==""){
					Toast("输入信息不能为空")
				}else if(this.user.password!=this.user.password1){
					Toast("输入密码不一致")
				}else{
					console.log("开始注册")
					this.$http({
						url:'http://www.520mg.com/member/reg_new2.php',
						method:"post",
						data:`userid=${this.user.username}&userpwd=${this.user.password}&email=${this.user.email}`,
					}).then((res)=>{
						console.log("进入到注册接口")
						if(res.data.status==1){
							Toast("注册成功"),
							this.$router.push('/login')
						}else{
							console.log(res)
							Toast(`${res.data.msg}`)
						}
						
					})
				}
				
			}
			
		}
	}
</script>

<style>
</style>
