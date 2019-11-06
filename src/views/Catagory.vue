<template>
	<div class="catagory">
		<div class="header" >
			<van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
			  <van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		
		<van-row>
		  <van-col span="8">
			  <div class="cebianlian">
			  	<van-sidebar v-model="activeKey">
					
			  	  <van-sidebar-item :title="item.category_name" v-for="(item,index) in catagory.data"/>
			  	  
			  	</van-sidebar>
			</div>
		  </van-col>
		  <van-col span="16">
			  <div class="content">
				  <div v-for="(item,index) in catagory.data" v-show="activeKey==index" >
					  <div v-for="item1 in item.category_list">
						  <div v-if="item1.view_type=='cells_auto_fill'">
							  <img :src="item1.body.items[0].img_url_webp" style="width: 100%;">
						  </div>
						  <div v-else-if="item1.view_type=='category_title'" style="width: 50% ; margin: 0 auto;">
							  <van-divider >{{item1.body.category_name}}</van-divider>
						  </div>
						  <div v-else-if="item1.view_type=='category_group'">
							  <!-- {{item1.body.items}} -->
							  <van-grid :column-num="3" icon_size="87">
								  
							   <van-grid-item v-for="item2 in item1.body.items" 
							        :icon="item2.img_url_webp"
							        :text="item2.product_name"
									@click="getProduct(item2)"
							   />
							  </van-grid>
						  </div>
					  </div>
				  </div>
			  </div>
		  </van-col>
		</van-row>
	</div>
</template>

<script>
import {catagory} from "../data.js";
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default{
	data(){
		return {
			catagory:{},
			activeKey:0,
		}
	},
	created() {
		this.catagory=catagory,
		console.log(this.activeKey)
	},
	 methods: {
	    onClickLeft() {
	      this.$router.go(-1);
	    },
	    onClickRight() {
	      Toast('搜索');
	    },
		getProduct(item2){
			this.$router.push(`/product/${item2.action.path}`)
		}
	  }
}
</script>

<style scoped="scoped">
	.cebianlian{
		width: 200px;
	}
	.van-sidebar{
		width: 120px;
	}
	.content{
		position: fixed;
		top: 30px;	
	}
</style>
