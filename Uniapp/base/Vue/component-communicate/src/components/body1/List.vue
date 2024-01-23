<template>
    <div class="body">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
     </div>

     <button @click="changeProps">修改props</button>
</template>

<script>
    export default {
        props: ['lists'],
        methods: {
            changeProps() {
                this.list[0] = 'HTML'
            }
        },
    }
</script>

<style lang="css" scoped>

</style>