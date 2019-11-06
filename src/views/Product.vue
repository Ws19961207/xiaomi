<template>
	<div class="product">
		<h1><van-icon name="arrow-left" @click="$router.go(-1)"/> 商品的id是:{{this.$route.params.id}}</h1>
	
		<div class="swip">
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(item, index) in product.data.goods_info[0].gallery_v3" :key="index">
			    <img :src="item.img_url" width="100%" />
			  </van-swipe-item>
			</van-swipe>
			<h1>{{product.data.goods_info[1].price}}</h1>
		</div>
		<div class="nav">
			
			<van-goods-action>
				  <van-goods-action-icon icon="wap-home-o" text="首页" @click="$router.push('/')"/>
				   <van-goods-action-icon icon="cart-o" text="购物车" @click="link" to="/carts" :info="this.$store.state.carts.length" />
				<van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="add" />
				  <van-goods-action-button color="#7232dd" type="danger" text="预约购买" @click="success"/>
			</van-goods-action>
			
		
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
import {product} from "../data.js"
export default{
	data(){
		return {
			product:product,
		}
	},
	methods:{
		success(){
			Toast.success('预约成功')
		},
		add(){
			this.$store.commit("addTocarts",{
				id:this.$route.params.id,
				name: product.data.product_info.name,
				price:product.data.goods_info[1].price,
				num:1
			})
			Toast.success('购物车添加成功')
			
		},
		link(){
			this.$store.commit("change","cart");
		}
	}
}
</script>

<style>
</style>
