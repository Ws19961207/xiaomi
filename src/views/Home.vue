<template>
  <div class="home" >
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<div class="head-top">
		
		<van-search
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		>
		  <div slot="action" >搜索</div>
		</van-search>
		<van-tabs v-model="active" sticky>
		  <van-tab v-for="(item,index) in data.data.tabs" :title="item.name">
		  </van-tab>
		</van-tabs>
	</div>
	<div id="tuijian" v-model="active" v-if="active==0">
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(img, index) in data.data.data.sections[0].body.items" :key="index">
			    <img class="full" :src="img.img_url_webp" />
			  </van-swipe-item>
			</van-swipe>
			<span></span>
			<van-grid :column-num="5"  icon-size="72px">
			  <van-grid-item v-for="(item,index) in data.data.data.sections[1].body.items" :icon="item.img_url_webp"  />
			</van-grid>
			<van-grid :column-num="5"  icon-size="72px">
			  <van-grid-item v-for="(item,index) in data.data.data.sections[2].body.items" :icon="item.img_url_webp"  />
			</van-grid>
			<div style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
			<van-row>
			  <van-col span="12" background-color="red"><img class="img1" :src="data.data.data.sections[4].body.items[0].img_url_webp"></van-col>
			  <van-col span="12"><img class="img1" :src="data.data.data.sections[4].body.items[1].img_url_webp"></van-col>
			   <van-col span="12"><img class="img1" :src="data.data.data.sections[4].body.items[2].img_url_webp"></van-col>
			</van-row>
			<div style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
			<van-row>
			  <van-col span="24" background-color="red"><img class="img1" :src="data.data.data.sections[6].body.items[0].img_url_webp"></van-col>
			</van-row>
			<div style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
			<van-row>
			  <van-col span="24" background-color="red"><img class="img1" :src="data.data.data.sections[8].body.items[0].img_url_webp"></van-col>
			</van-row>
			<div style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
			<van-row >
			  <van-col span="12" background-color="red" v-for="item in data.data.data.sections[10].body.items"> <phones :item="item" ></phones></van-col>
			  <!-- <van-col span="12" background-color="red"><img class="img1" :src="data.data.sections[10].body.items[1].img_url_webp"></van-col>  -->
			</van-row>
	</div>
	<div class="phone" v-else-if="active==1">
		<van-image
		  width="100%"
		  :src="data1.data.data.sections[0].body.items[0].img_url"
		/>
		<van-image
		  width="100%"
		  style="margin-top: -10px;"
		  :src="data1.data.data.sections[4].body.items[0].img_url"
		/>
		
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in data1.data.data.sections[6].body.items" :key="index">
		    <img :src="image.img_url_webp" />
		  </van-swipe-item>
		</van-swipe>
		<van-image
		  width="100%"
		  style="margin-top: -10px;"
		  :src="data1.data.data.sections[8].body.items[0].img_url"
		/>
		<van-row style="margin-top: -5px;">
		  <van-col span="8" background-color="red"><img class="img1" :src="data1.data.data.sections[9].body.items[0].img_url_webp"></van-col>
		  <van-col span="8"><img class="img1" :src="data1.data.data.sections[9].body.items[1].img_url_webp"></van-col>
		   <van-col span="8"><img class="img1" :src="data1.data.data.sections[9].body.items[2].img_url_webp"></van-col>
		</van-row>
		<van-row >
		  <van-col span="8" background-color="red"><img class="img1" :src="data1.data.data.sections[10].body.items[0].img_url_webp"></van-col>
		  <van-col span="8"><img class="img1" :src="data1.data.data.sections[10].body.items[1].img_url_webp"></van-col>
		   <van-col span="8"><img class="img1" :src="data1.data.data.sections[10].body.items[2].img_url_webp"></van-col>
		</van-row>
		<van-row >
		  <van-col span="8" background-color="red"><img class="img1" :src="data1.data.data.sections[11].body.items[0].img_url_webp"></van-col>
		  <van-col span="8"><img class="img1" :src="data1.data.data.sections[11].body.items[1].img_url_webp"></van-col>
		   <van-col span="8"><img class="img1" :src="data1.data.data.sections[11].body.items[2].img_url_webp"></van-col>
		</van-row>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
	
	
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Phones from '@/components/Phones.vue'
import {data,data1,data2,data3} from "../data.js"
export default {
  // name: 'home',
  
		  components: {
			// HelloWorld,
				Phones
			},
					
		  data(){
			  return {
				  data:{},
				  data1:{},
				  data2:{},
				  data3:{},
				  
				  active:0
			  }
		  },
		  created(){
			this.data = data,
			this.data1 = data1;
			this.data2 = data2;
			this.data3 = data3;
		  },
		

}
</script>
