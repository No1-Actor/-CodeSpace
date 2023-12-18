<template>
    <div>
        <Head @add="hand"/>
        <List :msg="msg"/>
    </div>
  </template>
  
  <script>
import Head from "./components/body3/Head.vue";
import List from "./components/body3/List.vue";
    export default {
      components: {
        Head,
        List
      },
      data() {
        return {
            msg: ''
        }
      },
      methods: {
        hand(val) {
        // 在这里处理 submit 事件，可以根据需要修改数据或执行其他操作
            console.log('Submitted:', val);
            this.msg = val
            }
        }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>