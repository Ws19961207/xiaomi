<template>
	<div class="phone">
		<img :src="item.img_url_webp" style="width: 100%;">
		<h4>{{ item.product_name }}</h4>
		<h3>{{ item.product_brief}}</h3>
		<h3>${{ item.product_brief}}起</h3>
		<button background-color="orange" >立即购买</button>
		
	</div>
	
</template>

<script>
	export default{
		props:["item"]
	}
</script>

<style scope lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.phone{
		margin: 0 auto;
		text-align: center;
	}
</style>
