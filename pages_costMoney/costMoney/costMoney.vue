<template>
	<div class="pages">
		<img class="bg-img" src="../cm_static/kuijia.png" alt="" />
		<div class="send-top-img">
			<img @click="showSendList = true" src="../../static/send-list.png" alt="" />
			<div>礼单</div>
		</div>
		<div class="cost-kj" @click="payMoney(990, '1')">盔甲钱</div>
		<div class="cost-xx">
			<div class="cost-item" v-for="(i, index) in 3" :key="index" @click="payMoney(i, '0')">星星钱</div>
		</div>
		<div class="cost-record" @click="openRecord">充值记录</div>
		<!-- 礼单列表 -->
		<u-popup :show="showSendList" @close="showSendList = false" @open="openSendList" bgColor="rgba(255,255,255,0.8)">
			<img class="send-img" src="../../static/send-list.png" alt="" />
			<div class="send-state">
				<div v-for="(i, index) in 2" :key="index" :class="bigLook === i ? 'select-send' : 'name-send'" @click="changeLookList(i)">
					{{ i === 0 ? '收到' : '送出' }}
				</div>
			</div>
			<div class="send-box">
				<!-- 元宝 -->
				<div class="box-list">
					<img class="list-title" src="../../static/money.png" alt="" />
					<div>
						<scroll-view v-if="moneyList && moneyList.length !== 0" :scroll-y="true" style="width: 100%; height: 696rpx" @scrolltolower="lowerMoney">
							<div class="list-tiem" v-for="(i, index) in moneyList" :key="index">
								<img class="ava" :src="bigLook === 0 ? i.sendUserAvatar : i.receiveUserAvatar" alt="" @click="toOtherUser(i)" />
								<div class="intro">{{ i.status === 33 ? '参与水果拼盘消耗' : i.status === 34 ? '参与水果拼盘获取' : i.status === 35 ? '捡漂流瓶' : '' }}</div>
								<div class="count">{{ i.num }}</div>
							</div>
						</scroll-view>
					</div>
					<u-loading-icon v-if="loadingMoney" color="#767374" size="16"></u-loading-icon>
				</div>
			</div>
		</u-popup>
		<!-- 充值记录遮罩层 -->
		<u-overlay :show="showRecordList" @click="showRecordList = false">
			<div class="box" @tap.stop>
				<!-- 列表 -->
				<div>
					<scroll-view v-if="recordList.length !== 0" :scroll-y="true" style="width: 100%; height: 710rpx" @scrolltolower="lowerRecord">
						<div class="box-tiem" v-for="(i, index) in recordList" :key="index">
							<div>{{ i.payTime }}</div>
							<div>{{ i.actualPrice }}元</div>
						</div>
					</scroll-view>
				</div>
				<!-- 底部加载提示 -->
				<u-loading-icon v-if="loadingRecord" color="#767374" size="16"></u-loading-icon>
				<div v-if="!loadingRecord && pageNumRecord >= lastPageNumRecord" class="next">已加载全部充值记录</div>
			</div>
		</u-overlay>
	</div>
</template>

<script>
import { list, exchange, buy, upList } from '@/api/costMoney.js';

import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
	computed: {
		...mapState(['uid'])
	},
	data() {
		return {
			//礼单选收到0或者送出1
			bigLook: 0,
			//礼单显示
			showSendList: false,
			//礼单元宝-------------------------------
			//元宝列表
			moneyList: [],
			//是否显示加载
			loadingMoney: false,
			//当前页和最后一页是同一页显示没有更多了
			pageNumMoney: 1,
			pageSizeMoney: 20,
			lastPageNumMoney: '',
			//充值记录---------------------------------
			showRecordList: false,
			//充值列表
			recordList: [],
			//是否显示加载
			loadingRecord: false,
			//当前页和最后一页是同一页显示没有更多了
			pageNumRecord: 1,
			pageSizeRecord: 12,
			lastPageNumRecord: '',
			//----------------------------------------
			timer: null,
			exchageing: false
		};
	},
	methods: {
		//充值
		payMoney(i, n) {
			let data;
			if (n === '1') {
				data = { num: i, isArmour: n };
			} else {
				const num = i === 0 ? 1 : i === 1 ? 2 : 5;
				data = { num: num, isArmour: n };
			}
			if (this.timer) {
				return;
			}
			uni.showLoading({
				title: '请求支付中'
			});
			this.timer = setTimeout(() => {
				uni.hideLoading();
				this.wxPay(data);
				this.timer = null;
			}, 1500);
		},
		async wxPay(data) {
			//请求后端获取参数
			let res = await buy(data);
			if (res.code !== 0) {
				uni.$u.toast(res.msg);
				return;
			}
			//调用真实支付接口
			uni.requestPayment({
				provider: 'wxpay', // 服务提提供商
				orderInfo: '', //订单数据
				timeStamp: res.timeStamp, // 时间戳
				nonceStr: res.nonceStr, // 随机字符串
				package: res.package, //统一下单接口返回的 prepay_id 参数值
				signType: res.signType, // 签名算法
				paySign: res.paySign, // 签名
				success: function (res) {
					// this.loading = false;
					uni.$u.toast('充值成功');
				},
				fail: function (err) {
					uni.$u.toast(err);
				}
			});
			this.loading = false;
		},
		//-------------------------
		//打开充值记录
		openRecord() {
			this.showRecordList = true;
			this.recordList = [];
			this.pageNumRecord = 1;
			this.lastPageNumRecord = '';
			this.getRecordList();
		},
		//下拉加载更多充值记录
		lowerRecord() {
			if (this.pageNumRecord >= this.lastPageNumRecord) {
				return;
			}
			// 判断是否正在请求其它数据，如果是，则不发起额外的请求
			if (this.loadingRecord) return;
			// 让页码值自增 +1
			this.pageNumRecord += 1;
			// 重新获取列表数据
			this.getRecordList();
		},
		//充值记录
		async getRecordList() {
			this.loadingRecord = true;
			let res = await upList({
				page: this.pageNumRecord,
				limit: this.pageSizeRecord
			});
			console.log('充值记录');
			console.log(res);
			this.recordList = [...this.recordList, ...res.records];
			this.lastPageNumRecord = res.total === 0 ? 0 : res.total / this.pageSizeRecord;
			this.loadingRecord = false;
		},
		//-------------------------
		//打开送礼层
		openSendList() {
			//默认请求收到送礼信息
			this.moneyList = [];
			this.pageNumMoney = 1;
			this.lastPageNumMoney = '';
			this.getMoneyList();
		},
		//切换状态
		changeLookList(i) {
			this.bigLook = i;
			//切换请求收到送礼信息
			this.moneyList = [];
			this.getMoneyList();
		},
		//----------------------
		async getMoneyList() {
			//请求送礼信息 0收到-16 1送出-8
			let state = 16;
			if (this.bigLook === 1) {
				state = 8;
			}
			this.loadingMoney = true;
			let res = await list({
				page: this.pageNumMoney,
				limit: this.pageSizeMoney,
				status: state,
				type: 1
			});
			console.log('收到/送出银元');
			console.log(res);
			if (res.code !== 0) {
				this.loadingMoney = false;
				uni.$u.toast(res.msg);
				//关闭节流阀
				this.loadingMoney = false;
				return;
			}
			this.moneyList = [...this.moneyList, ...res.page.data];
			this.lastPageNumMoney = res.page.last_page;
			this.loadingMoney = false;
		},
		//下拉加载更多元宝
		lowerMoney() {
			if (this.pageNumMoney >= this.lastPageNumMoney) {
				return;
			}
			if (this.loadingMoney) return;
			this.pageNumMoney += 1;
			this.getMoneyList();
		},
		toOtherUser(i) {
			let ouid = this.bigLook === 0 ? i.sendUid : i.receiveUid;
			uni.navigateTo({
				url: '../../pages_userActivity/otherUser/otherUser?ocateId=' + i.cateId + '&ouid=' + ouid
			});
		}
	}
};
</script>

<style lang="less">
.pages {
	min-height: 100vh;
	color: transparent;
}
.bg-img {
	position: absolute;
	flex-wrap: wrap;
	width: 750rpx;
	height: 1480rpx;
	top: 0;
	left: 0;
	z-index: -1;
}
.send-top-img {
	position: absolute;
	top: 40rpx;
	right: 40rpx;
	color: #333;
	text-align: center;
	img {
		width: 70rpx;
		height: 70rpx;
	}
}
.cost-kj {
	width: 90%;
	height: 180rpx;
	margin: 180rpx auto 0;
}
.cost-xx {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	z-index: 20;
	box-sizing: border-box;
	margin-top: 44rpx;
	.cost-item {
		width: 30%;
		height: 150rpx;
	}
}
.cost-record {
	margin: 48rpx auto 0;
	text-align: center;
}
.send-list {
	width: 94rpx;
	height: 94rpx;
	margin: 30rpx 0 0 20rpx;
}

.send-img {
	width: 60rpx;
	height: 60rpx;
	margin-top: 30rpx;
	margin-left: 50%;
	transform: translateX(-50%);
}
.send-state {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 10rpx 0;
	.select-send {
		font-size: 48rpx;
		padding: 0 10rpx;
		color: #333;
	}
	.name-send {
		font-size: 36rpx;
		padding: 0 10rpx;
		color: #333;
	}
}
.send-box {
	display: flex;
	width: 100%;
	height: 850rpx;
	.box-list {
		position: relative;
		width: 100%;
		.list-title {
			width: 76rpx;
			height: 76rpx;
			margin: 18rpx 0;
			margin-left: 50%;
			transform: translateX(-50%);
		}
		.list-tiem {
			display: flex;
			justify-content: space-between;
			align-content: center;
			padding: 10rpx 20rpx;
			.ava {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
			.intro {
				line-height: 70rpx;
				color: #a3a3a3;
			}
			.count {
				line-height: 70rpx;
				color: #333;
			}
		}
		.next {
			width: 100%;
			color: #767374;
			text-align: center;
		}
	}
}
.send-box .box-list:nth-child(2) {
	border: 2rpx solid #adadad;
	border-top: 0;
	border-bottom: 0;
	.list-title {
		width: 100rpx;
		height: 100rpx;
		margin-top: 8rpx;
		margin-bottom: 8rpx;
	}
}
.box {
	box-sizing: border-box;
	width: 600rpx;
	height: 800rpx;
	background-color: rgba(255, 255, 255, 0.8);
	margin-left: 50%;
	margin-top: 50%;
	transform: translateX(-50%);
	border-radius: 20rpx;
	padding: 24rpx 20rpx;
	.box-tiem {
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding: 6rpx 20rpx;
		color: #333;
		font-size: 32rpx;
	}
	.next {
		width: 100%;
		color: #767374;
		text-align: center;
	}
}
</style>
