<template>
    <div>
        Home
    </div>
    <keep-alive>
        <component :is="Hello"></component>
    </keep-alive>
</template>

<script setup>
import Hello from '../src/components/Hello.vue';
import { onMounted, onBeforeMount, onUnmounted } from 'vue';

onBeforeMount(() => {
    console.log('onBeforeMount');
});

onMounted(() => {
    console.log('onMounted');
});

onUnmounted(() => {
    console.log('onUnmounted');
});
</script>

<style lang="css" scoped>

</style>