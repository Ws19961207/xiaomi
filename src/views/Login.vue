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
			    v-model="user.username"
			    required
			    clearable
			    label="用户名"
			    right-icon="question-o"
			    placeholder="请输入用户名"
			    @click-right-icon="$toast('question')"
			  />
			
			  <van-field
			    v-model="user.password"
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
	import Vue from 'vue';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	export default{
		data(){
			return {
				user:{
					username:"",
					password:""
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
			login(){
				if(this.user.username==""){
					Toast('用户名不能为空')
				}else if(this.user.password==""){
					Toast('密码不能为空')
				}else{
					this.$http({
						url:'http://www.520mg.com/member/index_login.php',
						method:"post",
						data:`fmdo=login&dopost=login&userid=${this.user.username}&pwd=${this.user.password}`
					}).then((res)=>{
						console.log(res)
						if(res.data.status==1){
							Toast(`${res.data.msg}`)
							this.$store.commit("setxianshi",true);
							this.$store.commit("getName",this.user.username);
							if(this.$route.query.redirect){
								this.$router.push(this.$route.query.redirect);
							}else{
								this.$router.push("/");
									
								}
						}
						else{
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
