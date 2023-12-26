(function (doc, win) {  // 源码不干扰其他js文件
    var docEl = doc.documentElement // 获取页面根节点html
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'  // 判断是否为移动端
    var recalc = function () {
        var clientWidth = docEl.clientWidth  // 获取页面宽度
        if (!clientWidth) return  // 防止页面没有加载完成
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'  // 设置根节点字体大小
    }

    win.addEventListener(resizeEvt, recalc) // 设备尺寸变更实时重置字体
    document.addEventListener('DOMContentLoaded', recalc)  // DOM加载完成后执行recalc
})(document, window)