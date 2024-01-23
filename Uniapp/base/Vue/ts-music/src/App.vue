<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { usePersonalizedStore } from './store/personalized';


const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore()

onMounted(async () => {
  await getPersonalized()
})

</script>

<template>

<ul>
  <li v-for="mv in personalizedMv" :key="mv.id">
    <img :src="mv.picUrl">
  </li>
</ul>
</template>

<style scoped>

</style>

