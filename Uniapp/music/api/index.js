import baseUrl from './request.js'

// 首页的接口请求
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'get',
		data: data,
		authType: 'None',
	})
}

export const apiGetBall = () => {
	return uni.request({
		url: baseUrl + '/homepage/dragon/ball',
		method: 'get',
	})
}

export const apiGetRecommendList = () => { // 推荐歌单
	return uni.request({
		url: baseUrl + '/recommend/resource',
		method: 'get',
	})
}

export const apiGetRecommendSongs = () => { // 推荐歌曲
	return uni.request({
		url: baseUrl + '/recommend/songs',
		method: 'get',
	})
}

export const apiGetPersonalizedList = () => { // 雷达歌单
	return uni.request({
		url: baseUrl + '/personalized?limit=6',
		method: 'get',
	})
}