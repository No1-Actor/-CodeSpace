<template>
   <div class="body">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: ''
            }
        },
        // watch: {
        //     msg(newVal) {
        //         this.lists.push(newVal)
        //     }
        // },
        data() {
            return {
                lists: ['这是List', 'css'],
            }
      },
      methods: {
        
      },
    }
</script>

<style lang="css" scoped>

</style>