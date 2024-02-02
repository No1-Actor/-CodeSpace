<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-link v-slot="{Component}">
      <keep-alive :include="['Home']">
        <component :is='Component'></component>
      </keep-alive>
    </router-link>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

</style>