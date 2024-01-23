<script setup>
// import Rate from './components/Rate.vue'
import JHead from './components/JHead.vue'
import JAdver from './components/JAdver.vue'
import JMain from './components/JMain.vue'
import JSide from './components/JSide.vue'
import Item from './components/Item.vue'
</script>

<template>
  <!-- <h1>hello Vue!</h1>
  <Rate /> -->
  <div class="header">
    <JHead />
  </div>

  <div class="body">
    <div class="aside">
      <JSide />
    </div>
    <div class="main">
      <JMain />
    </div>
    <div class="right">
      <JAdver />
    </div>
  </div>
</template>

<style scoped>

</style>
