<template>
    <div>
        About
    </div>
    <keep-alive>
        <component :is="Hello"></component>
    </keep-alive>
</template>

<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import Hello from '../src/components/Hello.vue';


onBeforeRouteUpdate((to, from, next) => {
    console.log(to, from);
    next();
});

onBeforeRouteLeave((to, from, next) => {
    console.log(to, from);
    window.confirm('确定离开吗？') ? next() : next(false);
});

</script>

<style lang="css" scoped>

</style>