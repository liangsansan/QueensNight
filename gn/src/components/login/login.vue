<template>
	<div id="login" >
		<header>
			<div class="hb-nav">
				<div class="btnl">
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
						<input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-addon">密码 : </span>
						<input type="password" class="form-control" placeholder="password" aria-describedby="basic-addon1">
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
					<button type="button" class="btn btn-default">注册</button>
					<button type="button" class="btn btn-primary btn-success flr">登录</button>

				</form>
				<div class="cooperate-login">
					<h3>选择其他方式登录</h3>
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
	import './Login.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'

	export default {

			login: function(event){
			}
		}
	
</script>