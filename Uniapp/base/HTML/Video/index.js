var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

// 事件监听
speed.addEventListener('mousemove', function (e) {
    // offsetTop容器距离浏览器顶部距离
    var y = e.y - speed.offsetTop
    // offsetHeight获取容器高度
    var percent = y / speed.offsetHeight
    var height = Math.round(percent * 100) + '%'

    bar.style.height = height
    
    var min = 0.4
    var max = 4
    var playbackRate = percent * (max - min) + min
    // textContent获取节点文本
    // toFixed()保留2位小数
    bar.textContent = playbackRate.toFixed(2) + 'x'
    
    // 控制视频播放速率
    // playbackRate 视频播放速率
    video.playbackRate = playbackRate
})