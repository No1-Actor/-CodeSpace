<template>
  <div class="note-list">
    <ul v-if="noteList.length">
      <li v-for="item in noteList" :key="item.id" 
      @click="goNoteDetail(item.id)"
      >
        <div class="img">
          <img
            :src= "item.head_img"
            alt=""
          />
        </div>
        <p class="time">{{item.c_time}}</p>
        <p class="title">
          {{ item.title }}
        </p>
      </li>
    </ul>
    <p class="empty" v-else>暂无数据</p>
  </div>
</template>

<script setup>
// 页面加载中发请求，拿到当前的分类数据
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "../api";

const router = useRouter(); // 路由实例
const route = useRoute(); // 获取路由详情参数

// console.log(route.query.title); // 全局先执行

// onBeforeMount(() => {
// })

// onUnmounted(() => {
// })

onMounted(async () => {
  const { data } = await axios.post("/findNoteListByType", {
    note_type: route.query.title,
  });
  noteList.value = data;
  console.log(data);
});

const noteList = ref([]) // 第一种方式
// const state = reactive({ // 第二种方式
//   noteList: [],
// });

const goNoteDetail = (id) => {
  router.push({
    path: "/noteDetail",
    // params: { // 以 /:id 形式传参
    //   id,
    // },
    query: { // 以 ? 形式传参
      id,
    },
  });
};
</script>

<style lang="less" scoped>
.note-list{
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    li{
      img{
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }
      .time{
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title{
        width: 3.5rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
