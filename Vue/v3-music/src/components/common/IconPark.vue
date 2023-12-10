<template>
  <Component
    :is="icon"
    :theme="theme"
    :size="size"
    :spin="spin"
    :fill="fill"
    :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin"
    :strokeWidth="strokeWidth"
  />
</template>
<script setup>
//   定义父组件传过来的参数
// vue组件的一种声明方式，本来是有各种图标，Component + is="图标名" 
// 入侵式的组件声明方式
import { defineProps } from "vue";
// 子组件使用父组件传过来的props 先声明才能用 为了安全
defineProps([
  "icon",
  "theme",
  "size",
  "spin",
  "fill",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeWidth",
]);
</script>
