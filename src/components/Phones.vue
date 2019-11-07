<template>
	<div class="phone">
		<img :src="item.img_url_webp" style="width: 100%;">
		<h4>{{ item.product_name }}</h4>
		<h5>{{ item.product_brief}}</h5>
		<h5>￥{{ item.product_price}}起</h5>
		<van-button type="danger" size="small">立即购买</van-button>
		
	</div>
	
</template>￥

<script>
	export default{
		props:["item"]
	}
</script>

<style scope lang="less">

	.phone{
		margin: 0 auto;
		text-align: center;
	}
</style>
