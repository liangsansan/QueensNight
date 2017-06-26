<template>
	<div id="change" >
		<header>
			<div class="hb-nav">
				<div class="btnl" @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >修改密码</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				<form action="">
					<div class="input-group">
						<span class="input-group-addon">输入旧密码:</span>
						<input type="password" class="form-control" placeholder="password" v-model='oldPsw' aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-addon">输入新密码:</span>
						<input type="password" class="form-control" placeholder="password" v-model='newPsw' aria-describedby="basic-addon1">
					</div>
                    <div class="input-group">
						<span class="input-group-addon">确认新密码:</span>
						<input type="password" class="form-control" placeholder="password" v-model='reNewPsw' aria-describedby="basic-addon1">
					</div>
					<button type="button" class="btn btn-primary btn-success flr" @click='confirmChange'>确认</button>
				</form>
			</div>
		</article>
    </div>
</template>

<script type="text/javascript">
	import './changePsw.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'
	import http from '../../utils/HttpClient.js'
	
	export default {
		components:{

		},
		data:function(){
			return {
                oldPsw:'',
                newPsw:'',
                reNewPsw:''
			}
		},
		methods:{		
			confirmChange(){
                if(this.newPsw!=this.reNewPsw){
                    $.alert('两次输入不一致,请确认')
                    return false
                }
                $.alert('密码已修改,请重新登录')
                localStorage.clear();
                router.push('login')
            },goback(){
				router.go(-1)
			}
		}
	}
	
</script>