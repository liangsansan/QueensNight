<template>
	<div id="register" >
		<header>
			<div class="hb-nav">
				<div class="btnl"  @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >注册</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				<form action="">
					<div class="input-group">
						<span class="input-group-addon">用户名:</span>
						<input type="text" class="form-control" id="usn" placeholder="Username" aria-describedby="basic-addon1" v-model='username' @blur='checkUsn'>
					</div>
					<div class="input-group">
						<span class="input-group-addon">密码:</span>
						<input type="password" class="form-control" id='psw' placeholder="password" v-model='password' aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-addon">确认密码:</span>
						<input type="password" class="form-control" id='Confpsw' placeholder="confirm password" v-model='cfpsw' aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-addon">验证码 : </span>
						<input type="text" class="form-control" id="varfC" placeholder="verification"  aria-describedby="basic-addon1">
					</div>
					<p class="rem_id clearfix">
						<label id="choose_bgi" class="">
							<input class="" type="checkbox" name="is_remember" checked="checked">
							继续注册表示已经阅读并同意
							<a href="/wap/passport-license.html">《兰缪服务条款》</a>
						</label>
					</p>
					<button type="button" class="btn btn-lg btn-block" @click="regNow">立即注册</button>
				</form>
				<div class="cooperate-login">
					<h3>选择其他方式注册</h3>
						<ul class="cooper-link">
							<li>
								<a href="#">
									<i class="icon iconfont icon-qq"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="icon iconfont icon-xinlangweibo"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="icon iconfont icon-weixin"></i>
								</a>
							</li>
						</ul>
				</div>
			</div>
		</article>
    </div>
</template>

<script type="text/javascript">
	import './register.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'

	var[a,b,c]=[$('#usn').val(),$('#psw').val(),$('#Confpsw').val()]
	console.log(a,b,c)
	export default {
			data:function(){
				return {
					username:'',
					password:'',
					cfpsw:''
				}
			},
			methods:{
				goback(){
					console.log(123)
					window.history.go(-1)
				},
				login(event){
				},
				regNow(){
					let[a,b,c]=[this.username,this.password,this.cfpsw];
					let info={username:a,password:b};
					console.log(info)
					$.post('http://localhost:888/' +  'register', info, function(response){
						if(response.status ==false){
							$.alert(response.message)
						}else if(response.status ==true){
							localStorage.userName = a;
							$.alert('恭喜你,注册成功');
							router.push('mine');
						}
					})
				},
				checkUsn(){
				}

			}
		}
	
</script>