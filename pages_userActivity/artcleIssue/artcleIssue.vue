<template>
	<div class="pages">
		<!-- 粘性定位 -->
		<u-sticky>
			<div class="issue-top">
				<u-icon name="close" color="#333" size="24" @click="backTo"></u-icon>
				<div class="send" @click="sendArticle">
					<u-button type="warning" :text="secret === 1 ? '存档' : '发布'"></u-button>
				</div>
			</div>
		</u-sticky>
		<!-- 选择上传 -->
		<u-radio-group v-model="value" activeColor="#f9ae3d">
			<u-radio :name="1" shape="circle" :label="secret === 1 ? '图文' : '发布图文'"></u-radio>
			<u-radio :name="2" shape="circle" :label="secret === 1 ? '视频' : '发布视频'"></u-radio>
		</u-radio-group>

		<!-- 上传组件 -->
		<div class="uploads">
			<!-- 文本 -->
			<u--textarea
				v-if="value === 1"
				v-model="content"
				:placeholder="secret === 1 ? '字数无限制' : secret === 2 ? '随兴抛投，任“心”漂流，瓶中缘分，相约私聊' : '有感而发，随便写两句，吐槽、赞美都行！'"
				:confirmType="null"
				style="white-space: pre-wrap"
				autoHeight
				border="none"
				:show-confirm-bar="false"
				maxlength="-1"
			></u--textarea>

			<!-- 上传图片 -->
			<u-upload
				v-if="value === 1"
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="9"
				:previewFullImage="false"
				width="160rpx"
				height="160rpx"
			></u-upload>

			<!-- 文本 -->
			<u--textarea
				v-if="value === 2"
				v-model="content2"
				:placeholder="secret === 2 ? '建议上传视频时长15s' : '建议上传视频时长60s'"
				autoHeight
				border="none"
				:show-confirm-bar="false"
				maxlength="-1"
			></u--textarea>
			<!-- 上传视频 -->
			<div class="v-box" v-if="value === 2">
				<img v-if="vtype === 1" src="../../static/video-img.jpg" mode="" @click="selectVideo" />
				<img v-if="vtype === 2" src="../ua_static/up-video.png" />
				<img v-if="vtype === 3" :src="videoImg" />
				<img v-if="vtype === 3" src="../ua_static/up-video-ok.png" />
				<div v-if="vtype === 3" @click="removeVideo"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { ip } from '@/api/api.js';
import { addPost, checkContent, addXFilePost } from '@/api/artcleIssue.js';
import { lostBottle } from '@/api/currentBottle.js';
export default {
	data() {
		return {
			//说说类型
			meeting: 2,
			//文本
			content: '',
			content2: '',
			//图片
			fileList1: [],
			//视频
			fileList2: [],
			//视频封面
			videoImg: '',
			//显示视频上传状态
			vtype: 1,
			//说说内容类型
			value: 1,
			//字符串1为私人  2为漂流瓶
			secret: null,
			mediaImgList: [],
			mediaVideoList: [],
			upMediaOrImg: false,
			timer: null
		};
	},
	onLoad(option) {
		this.secret = option.secret ? Number(option.secret) : null;
		if (!this.secret) {
			uni.$u.toast('请遵守法律法规，文明发言');
		}
	},
	methods: {
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1);
		},
		// 新增图片
		async afterRead(event) {
			let lists = [].concat(event.file);
			let fileListLen = this[`fileList${event.name}`].length;
			lists.map((item) => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url);
				let item = this[`fileList${event.name}`][fileListLen];
				this[`fileList${event.name}`].splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					})
				);
				fileListLen++;
			}
			this.upMediaOrImg = false;
		},
		//上传图片
		uploadFilePromise(url) {
			this.upMediaOrImg = true;
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: ip + '/app/common/upload',
					filePath: url,
					name: 'file',
					success: (res) => {
						setTimeout(() => {
							resolve(JSON.parse(res.data));
						}, 1000);
					},
					fail() {
						this.upMediaOrImg = false;
						uni.$u.toast(e);
					}
				});
			});
		},
		//新增上传视频
		selectVideo() {
			uni.chooseMedia({
				maxDuration: 60,
				count: 1,
				sourceType: ['album', 'camera'],
				compressed: true,
				mediaType: ['video'],
				success: (r) => {
					this.vtype = 2;
					let linShi2 = r.tempFiles[0].tempFilePath;
					this.upMediaOrImg = true;
					uni.uploadFile({
						url: ip + '/app/common/upload',
						filePath: linShi2,
						name: 'file',
						header: {
							token: uni.getStorageSync('token')
						},
						success: (uploadFileRes) => {
							let paths = JSON.parse(uploadFileRes.data);
							this.vtype = 3;
							this.videoImg = r.tempFiles[0].thumbTempFilePath;
							this.mediaVideoList.push(paths.result[0].url);
							this.upMediaOrImg = false;
						},
						fail(e) {
							this.upMediaOrImg = false;
							uni.$u.toast(e);
						}
					});
				}
			});
		},
		//删除视频
		removeVideo() {
			this.vtype = 1;
			this.mediaVideoList = [];
			this.videoImg = '';
		},
		//点击发布 调用接口进行安全验证
		async sendArticle() {
			let contents = this.value === 1 ? this.content || '' : this.content2 || '';
			let medias = this.value === 1 ? this.fileList1 : this.mediaVideoList;
			let title = this.value === 1 ? '请先等待图片上传完成' : '请先等待视频上传完成';
			if (!contents && !medias?.length) {
				uni.$u.toast('发布不可为空');
				return;
			}
			if (this.upMediaOrImg) {
				uni.$u.toast(title);
				return;
			}

			this.content ? this.checkContent() : this.sendReallyArticle();
		},
		async checkContent() {
			let contents = this.value === 1 ? this.content || '' : this.content2 || '';
			uni.showLoading({
				title: '内容发布中'
			});
			let res = await checkContent({ content: contents });
			if (res.code !== 0 || res.result.errcode !== 0) {
				uni.hideLoading();
				uni.$u.toast('内容中包含敏感词汇，请修改！');
				return;
			}
			this.sendReallyArticle();
		},
		async sendReallyArticle() {
			this.mediaImgList = this.fileList1.map((item, i, arr) => {
				return item.url.result[0].url;
			});
			let res;
			let contents = this.value === 1 ? this.content || '' : this.content2 || '';
			let medias = this.value === 1 ? this.mediaImgList : this.mediaVideoList;

			if (this.secret === 1) {
				res = await addXFilePost({
					content: contents,
					meeting: this.meeting,
					media: medias
				});
			} else if (this.secret === 2) {
				res = await lostBottle({
					content: contents,
					type: Number(this.value + 1),
					media: medias
				});
			} else {
				res = await addPost({
					content: contents,
					meeting: this.meeting,
					media: medias
				});
			}
			uni.hideLoading();
			if (res.code !== 0) {
				uni.$u.toast(res.msg);
				return;
			}

			let pages = getCurrentPages();
			let beforePage = pages[pages.length - 2];
			beforePage.$vm.refresh = true;
			uni.navigateBack({
				success: function () {}
			});
		},
		backTo() {
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="less">
.issue-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	padding: 20rpx;
	background-color: white;
	.send {
		width: 120rpx;
		height: 66rpx;
		/deep/.u-button {
			height: 66rpx !important;
		}
	}
}
/deep/.u-textarea {
	margin-bottom: 20rpx;
}
.uploads {
	padding: 0 20rpx;
}
/deep/.u-upload {
	flex: 0 !important;
}
/deep/.u-upload__wrap {
	flex: 0 !important;
	image {
		width: 160rpx;
		height: 160rpx;
	}
}
/deep/.u-radio-group {
	margin: 20rpx;
	.u-radio {
		margin-right: 50rpx;
	}
}
/deep/.u-upload__button {
	flex-direction: row !important;
}
.v-box {
	position: relative;
	width: 160rpx;
	height: 160rpx;
	image {
		position: absolute;
		top: 0;
		left: 0;
		width: 160rpx;
		height: 160rpx;
	}
	div {
		position: absolute;
		top: 0;
		right: 0;
		width: 34rpx;
		height: 34rpx;
	}
}
</style>
