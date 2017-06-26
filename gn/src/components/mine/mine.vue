<template> 
    <div id="mine" >
		<header>
			<div class="hb-nav">
				<div class="btnl"  @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >会员中心</span>
			</div>
			<div class="hbmain-info">
				<p>
					用户名&nbsp;&nbsp;|&nbsp;&nbsp;
					<span class="hb-userName">{{username}}</span>
				</p>
				<p>
					您目前是&nbsp;&nbsp;:&nbsp;&nbsp;
					<span class="menberLevel">普通会员</span>
				</p>
				<p style="line-height:100%">
					经验值是&nbsp;&nbsp;:&nbsp;&nbsp;
					<span class="empirical">0</span>
					<span class="ellipsis">（经验值累计到1000升级高级会员）</span>
				</p>
			</div>
			
		</header>
		<article>
			<ul class="menber-list">
				<li class="list-top"><span class="list">我的订单</span><i class="icon iconfont flr icon-youjiantou-"  @click="allOrd" ></i><span class="flr have-look">查看全部订单</span></li>
				<li><span>我的钱包</span><i class="icon iconfont flr icon-youjiantou-" @click="myWallet" ></i></li>
				<li><span>我的关注</span><i class="icon iconfont flr icon-youjiantou-" @click="myStar" ></i></li>
				<li><span>咨询评价</span><i class="icon iconfont flr icon-youjiantou-" @click="ask" ></i></li>
				<li><span>地址管理</span><i class="icon iconfont flr icon-youjiantou-" @click="showAdd" ></i></li>
				<li><span>修改密码</span><i class="icon iconfont flr icon-youjiantou-" @click="rePsw" ></i></li>
			</ul>
		</article>
    </div>
</template> 
<script type="text/javascript">
	import './mine.scss'
	import $ from 'jquery'
	import router from '../../router/index.js'

	// 如果拿不到用户名 跳转到登录页
	if(!localStorage.userName){
		// $.alert('请先登录')
		// router.push('login')
	}


	export default {
		data: function(){
			return {
				username:localStorage.userName
			}
		},
		methods: {
			goback(){
				console.log(123)
				window.history.go(-1)
			},
			allOrd(){	
				
				$.alert('您还没有订单,快去买买吧')
			},
			myWallet(){
				router.push('myWallet')
			},
			myStar(){
				$.alert('啊!还没关注')
			},
			ask(){
			},
			showAdd(){
				router.push('address')
			},
			rePsw(){
				router.push('changePsw')
			}
		}
	}
</script>