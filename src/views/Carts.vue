<template>
	<div class="carts">
		<div class="head">
			<h1>购物车</h1>
		</div>
		
		<div class="content">
			<div  v-for="(good,index) in $store.state.carts">
			<van-card
			  :num="good.num"
			  :price="good.price"
			  :desc="good.id"  
			  :title="good.name"
			  :thumb="good.img"
			>
			  <div slot="tags">
			    <van-tag plain type="danger">标签</van-tag>
			    <van-tag plain type="danger">标签</van-tag>
			  </div>
			  <div slot="footer">
			    <van-button size="mini" @click="reduceNum(good)">-</van-button>
			    <van-button size="mini" @click="addNum(good)">+</van-button>
				 <van-button size="mini" @click="remove(index)">del</van-button>
			  </div>
			</van-card>
		</div>
		</div>
	</div>
			<!-- </div>
			<table cellpadding="" cellpadding="" border="" class="table">
				<tr><th>商品id</th><th>商品名</th><th>价格</th><th>数量</th><th>移除</th></tr>
				
				<tr v-for="good in $store.state.carts">
					<td>{{good.id}}</td>
					<td>{{good.name}}</td>
					<td>{{good.price}}</td>
					
					<td>
					<button @click="reduceNum(good)">-</button>
					{{good.num}}
					<button @click="addNum(good)">+</button>
					</td>
					<td><button @click="remove(index)">del</button></td>
					
				</tr>
			</table>
		</div> -->
	
</template>

<script>
	export default{
		methods:{
			reduceNum(item){
				this.$store.commit("reduce",item);
			},
			addNum(item){
				this.$store.commit("add",item);
			},
			remove(index){
				this.$store.commit("del",index);
			}
		
		}
	}
</script>

<style scoped="scoped">
	.head{
		text-align: center;
		margin-top: 20px;
		background-color: #FC7C1B;
		color: white;
	}
	.table{
		margin-top: 20px;
		width: 100%;
		text-align: center;
	}
</style>
