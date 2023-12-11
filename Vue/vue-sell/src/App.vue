<template>
  <v-header/>
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  components: { // 声明组件
    'v-header': Header
  }
}
</script>

<style lang="less">

</style>