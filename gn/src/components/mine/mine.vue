<template> 
    <div id="mine" >
		<header>
			<div class="hb-nav">
				<div class="btnl hbtn hisbtn"></div>
				<span >会员中心</span>
			</div>
			<div class="hbmain-info">
				<p>
					用户名&nbsp;&nbsp;|&nbsp;&nbsp;
					<span class="hb-userName">maskhb</span>
				</p>
				<p>
					您目前是&nbsp;&nbsp;:&nbsp;&nbsp;
					<span class="menberLevel">普通会员</span>
				</p>
				<p>
					经验值是&nbsp;&nbsp;:&nbsp;&nbsp;
					<span class="empirical">0</span>
					<span>（经验值累计到1000可称为高级会员）</span>
				</p>
			</div>
			
		</header>
		<article>
			<ul class="menber-list">
				<li class="list-top"><span class="list">我的订单</span><span class="have-look">查看全部订单</span></li>
				<li><span>我的钱包</span></li>
				<li><span>我的关注</span></li>
				<li><span>咨询评价</span></li>
				<li><span>地址管理</span></li>
				<li><span>修改密码</span></li>
			</ul>
		</article>
    </div>
</template> 
<script type="text/javascript">
	import './mine.scss'
	import $ from 'jquery'

	export default {
		data: function(){
			return {
				a:''
			}
		},
		methods: {
			
		}
	}
</script>