<template>
	<div class="carts">
		<div class="head">
			<h1>购物车</h1>
		</div>
		<div class="content">
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
		</div>
	</div>
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
