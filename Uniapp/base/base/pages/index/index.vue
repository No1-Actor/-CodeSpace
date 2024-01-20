<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator> <!-- 相当于a标签 -->
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @click="changTitle">
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
		<view class="name">
			text
		</view>
		<song :data='list.song'/>
	</view>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'
import song from '../../components/song/song.vue'	
	
const title = ref('你好')
const name = getApp().globalData.name
console.log(name);

const changTitle = () => {
	title.value = title.value === '你好' ? 'hello' : '你好'
}

const reverseTitle = computed(() => {
	return title.value.split('').reverse().join('')
})

const list = reactive({
	song: {
		img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708170012&t=d339800be27bd8e7c4a14d8c264436f9',
		title: '价格',
		price: '10',
		marketPrice: '13',
	}	
})

const goAbout = () => {
	uni.navigateTo({ // uni路由跳转
		url: '/pages/about/about'
	})
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
