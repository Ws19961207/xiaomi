<template>
  <div class="mine">
	  <van-nav-bar
	    left-text="返回"
	    right-text="首页"
	    left-arrow
	    @click-left="onClickLeft"
	    @click-right="onClickRight"
	  />
	 <div class="head">
		 <h3 class="top">我的主页</h3>
		 <van-image
		   round
		   width="8rem"
		   height="8rem"
		   src="../assets/img/cat_cute.gif"
		 />
		 <!-- <img src="../assets/img/cat_cute.gif" class="touxiang"> -->
		 <div class="id">
			 <h3>用户名：殇小妖</h3>
		 </div>
	 </div>
	 <van-collapse v-model="activeNames">
	   <van-collapse-item title="地址编辑" name="1">
		   <van-address-edit
		     :area-list="areaList"
		     show-postal
		     show-delete
		     show-set-default
		     show-search-result
		     :search-result="searchResult"
		     :area-columns-placeholder="['请选择', '请选择', '请选择']"
		     @save="onSave"
		     @delete="onDelete"
		     @change-detail="onChangeDetail"
		   />
	   </van-collapse-item>
	   <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
	   <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
	 </van-collapse>
	
	 <div class="address">
	 	<h3 @click="add">地址编辑</h3>
	 </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
	
	
	
export default{
	  data() {
	    return {
	      activeNames: ['1'],
		  areaList,
		  searchResult: []
	    };
	  },
	methods:{
		onClickLeft(){
			this.$router.go(-1);
		},
		onClickRight(){
			this.$router.push("/")
		},
		add(){
			
		},
		onSave() {
		  Toast('save');
		},
		onDelete() {
		  Toast('delete');
		},
		onChangeDetail(val) {
		  if (val) {
			this.searchResult = [{
			  name: '黄龙万科中心',
			  address: '杭州市西湖区'
			}];
		  } else {
			this.searchResult = [];
		  }
		}
	}
}
</script>
<style scoped="scoped" lang="less">
	.head{
		width: 100%;
		height: 220px;
		background-color:#FF6B00;
		text-align: center;
		.top{
			padding-top: 20px;
		}
		.touxiang{
			padding-top: 20px;
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
		.address{
			padding-top: 20px;
		}
	}
</style>