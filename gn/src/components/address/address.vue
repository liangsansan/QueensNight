<template>
	<div id="add" >
		<header>
			<div class="hb-nav">
				<div class="btnl" @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span>管理收货地址</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				<ul>
					<li class="address-row active">
						<div class="font-32">
							<label>收货人:</label>
							<label name="user-name">DK</label>
							<label name="phone-num" style="float: right">17612345678</label> 
						</div>
						<div class="font-24">
							<label>收货地址:</label>
							<label name="address">广东省广州市天河区元岗街道 元岗路310号智汇park</label>
						</div>
						<span class="right-icons"></span>
					</li>
					<li class="address-row">
						<div class="font-32">
							<label>收货人:</label>
							<label name="user-name">DK</label>
							<label name="phone-num" style="float: right">17612345678</label> 
						</div>
						<div class="font-24">
							<label>收货地址:</label>
							<label name="address">广东省广州市天河区元岗街道 元岗路310号智汇park</label>
						</div>
						<span class="right-icons"></span>
					</li>
					<li class="address-row">
						<div class="font-32">
							<label>收货人:</label>
							<label name="user-name">DK</label>
							<label name="phone-num" style="float: right">17612345678</label> 
						</div>
						<div class="font-24">
							<label>收货地址:</label>
							<label name="address">广东省广州市天河区元岗街道 元岗路310号智汇park</label>
						</div>
						<span class="right-icons"></span>
					</li>
				</ul>
                <!--<p>组件加载前按本地session用户名请求数据表</p>
                <p>如果找不到地址 显示没有收货地址,提示增加</p>
                <p>用v-for生成已添加的地址</p>
                <p>利用组件</p>-->
			</div>
		</article>
		<button type="button" class="btn" id="btnAd" @click='jumpToAdd'>新增收货地址</button>
		<router-view></router-view>
    </div>
</template>

<script type="text/javascript">
	import './address.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'

	export default {
		data:function(){
			return {
			}
		},
		methods:{		
			alertInfo(){
				$.alert('还在施工中')
			},
			goback(){
				router.go(-1)
			},
			jumpToAdd(){
				console.log('添加地址')
				// router.push('/add')
			}
		}
	}
	
</script>