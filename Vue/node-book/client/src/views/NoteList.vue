<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了今天睡觉了今天睡觉了今天睡觉了今天睡觉了今天睡觉了</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F10c93147-c811-48f6-abaa-9a87337635fc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307767&t=067a5c599350790062a0460c5a0859b5" alt="">
                </div>
                <p class="time">2023/01/31</p>
                <p class="title">今天睡觉了</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
// 页面加载中发请求，拿到当前的分类数据
import { onBeforeMount, onMounted, onUnmounted } from 'vue';

// console.log(123); // 全局先执行

onBeforeMount(() => {
    
})

onMounted(() => {

})

onUnmounted(() => {

})


</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid; // 网格布局
        grid-template-columns: 1fr 1fr; // 分成二列
        grid-column-gap: 50px; // 列间距
        grid-row-gap: 30px; // 行间距
        li{
            img{
                width: 100%;
                border-radius: 0.27rem;
            }
            .time{
                font-size: 0.3rem;
                color: rgba(16, 16, 16, 1);
                margin: 10px 0 5px 0;
            }
            .title{
                width: 3.5rem;
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap; // 不换行
                overflow: hidden; // 超出隐藏
                text-overflow: ellipsis; // 超出显示省略号
            }
        }
    }
}
</style>