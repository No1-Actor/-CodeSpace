<template>
  <v-header :seller="sellerData"/>

  <router-view />
</template>

<script>
import Header from "@/components/header/Header.vue";
import { getSeller } from "@/api";
export default {
  components: {
    // 声明组件
    "v-header": Header,
  },
  data() {
    return {
      sellerData: {}
    }
  },
  created() {
    // 获取数据
    getSeller().then((res) => {
      console.log(res);
      this.sellerData = res
    });
  },
};
</script>

<style lang="less">

</style>
