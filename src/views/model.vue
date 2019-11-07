<template>
	<div class="new">
		<div>
			<van-nav-bar
			  left-text="返回"
			  right-text="首页"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
		<div class="load">正在开发中...</div>
		<div class="load1">敬请期待 </div>
	</div>
</template>

<script>
	export default{
		methods:{
			onClickLeft(){
				this.$router.go(-1);
				// this.$router.go(0);
			},
			onClickRight(){
				this.$router.push("/")
			}
		}
	}
</script>

<style>
</style>
