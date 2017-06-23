<template>
	<div id="wallet" >
		<header>
			<div class="hb-nav">
				<div class="btnl" @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >我的钱包</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				<ul class="wallet-nav" >
					<li class="active" @click="toggleItem().bind(this)">我的积分</li>
					<li @click="toggleItem">我的预存款</li>
					<li @click="toggleItem">我的优惠券</li>
				</ul>
				<div class="pocket-int" v-show='true'>
					<div class="showIntegral inte">您当前有效积分 : <span class="integralData">0</span></div>
					<div class="pocket-action inte">尚未获取到积分</div>
					<div class="pocket-rules inte">
						<div class="rule-title">积分规则</div>
						<ul>
							<li>1.当积分已达到某一兑换积分标准时，顾客可将累计积分依照网站相应积分及兑换标准兑换回馈商品，网站将即时从用户会员积分中扣减相应积分。</li>
							<li>2.各项回馈项目（包含各项商品、服务或抵用券等）及兑换标准及兑换规则均以兑换当时最新回馈活动公告或目录为准。</li>
							<li>3.部分兑换商品有数量限制的，兑完为止。</li>
							<li>4.公告或目录如有有效期限的，逾期即不得兑换。</li>
							<li>5.积分兑换区的商品为只可用积分兑换的商品（如积分价格：100积分）。</li>
						</ul>
					</div>
				</div>
				<div class="pocket-money inte" v-show='false'>
					<p>您当前预存款余额为 <span>0.0</span> | <span>预存款充值</span>	</p>
					<div class="tradedetail">
						<h4>预存款交易记录 :</h4>
						<div class="content">
							尚无交易记录
						</div>
					</div>
				</div>
				<div class="poket-ticket inte" v-show='false'>
					<div class="tradedetail">
						<h4>我的优惠券</h4>
						<div class="content">
							尚无优惠券
						</div>
					</div>
				</div>
			</div>
		</article>
    </div>
</template>

<script type="text/javascript">
	import './myWallet.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'

	export default {
		data:function(){
			return {
				isActive:'false'
			}
		},
		methods:{
			toggleItem(eve){
				console.log(eve)
				$('.wallet-nav li').attr('class','');
				$(eve.target).attr('class','active')
			}
			,		
			goback(){
				router.go(-1)
			}
		}
	}
	
</script>