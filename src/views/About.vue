<template>
  <div class="about">
	  <van-tabs v-model="active">
	    <van-tab title="标签 1">内容 1</van-tab>
	    <van-tab title="标签 2">内容 2</van-tab>

	  </van-tabs>

	  
	  
	 
	  
	 <div v-if="active==0">
		 
		 <van-swipe :autoplay="3000">
		 	<!-- {{data1.data.data.sections[6].body.items }} -->
		   <van-swipe-item v-for="(image, index) in data1.data.data.sections[6].body.items" :key="index">
		 	  <!-- <p> {{ image.img_url}}</p> -->
		 
		     <img :src="image.img_url" />
		   </van-swipe-item>
		 </van-swipe>
		   
	 </div>
	  <div v-else-if="active==1">
		<van-swipe :autoplay="3000">
			<!-- {{data1.data.data.sections[6].body.items }} -->
		  <van-swipe-item v-for="(image, index) in data1.data.data.sections[6].body.items" :key="index">
			  <!-- <p> {{ image.img_url}}</p> -->
		
			<img :src="image.img_url" />
		  </van-swipe-item>
		</van-swipe>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {data1} from "../data.js"
export default {
 data() {
   return {
     active: 2
   };
 },
		  created(){

			this.data1 = data1;

		  }
		}
</script>