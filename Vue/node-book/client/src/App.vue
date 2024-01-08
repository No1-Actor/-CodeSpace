<template>
  <div>
    <!-- 过渡动画 -->
    <transition name="move"> 
      <router-view></router-view>
    </transition>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.move-enter-active, .move-leave-active{ 
  transition: all 0.5s ease-out; // 过渡动画
}

.move-enter-from, .move-leave-to{
  transform: translateX(100vw); // 过渡动画
  opacity: 0; 
}
</style>
