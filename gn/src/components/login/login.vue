<template>
	<div id="login" >
		<header>
			<div class="hb-nav">
				<div class="btnl" @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >登录</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				<form action="">
					<div class="input-group">
						<span class="input-group-addon">用户名:</span>
						<input type="text" class="form-control" placeholder="Username" v-model='username' aria-describedby="basic-addon1" >
					</div>
					<div class="input-group">
						<span class="input-group-addon">密码 : </span>
						<input type="password" class="form-control" placeholder="password" v-model='password' aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-addon">验证码 : </span>
						<input type="text" class="form-control" placeholder="verification" aria-describedby="basic-addon1">
					</div>
					<p class="rem_id clearfix">
						<label id="choose_bgi" class="">
							<input class="" type="checkbox" name="is_remember" checked="checked">
							记住账号
						</label>
						<a href="#" class="flr">忘记密码</a>
					</p>
					<button type="button" class="btn btn-default" @click='goReg'>注册</button>
					<button type="button" class="btn btn-primary btn-success flr" @click='hblogin'>登录</button>
				</form>
				<div class="cooperate-login">
					<h3>选择其他方式登录</h3>
						<ul class="cooper-link">
							<li>
								<i class="icon iconfont icon-qq" @click='alertInfo'></i>
							</li>
							<li>
								<i class="icon iconfont icon-xinlangweibo" @click='alertInfo'></i>
							</li>
							<li>
								<i class="icon iconfont icon-weixin" @click='alertInfo'></i>
							</li>
						</ul>
				</div>
			</div>
		</article>
    </div>
</template>

<script type="text/javascript">
	import './Login.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'

	export default {
		data:function(){
			return {
				username:'',
				password:''
			}
		},
		methods:{		
			alertInfo(){
				$.alert('还在施工中')
			},
			goback(){
				router.go(-1)
			},
			goReg(){
				router.push('register')
			},
			hblogin(){
				let[a,b]=[this.username,this.password];
				let info={username:a,password:b};
				console.log(this.username,this.password);
				$.post('http://localhost:888/' +  'login', info, function(response){
					if(response.status ==false){
						$.alert(response.message)
					}else if(response.status ==true){
						localStorage.userName = a;
						$.alert('登录成功');
						router.push('mine');
					}
				})
			}
		}
	}
	
</script>