<template>
    <div>
     <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确实</button>
     </div>
    </div>
    <List :lists="lists"/>
  </template>
  
  <script>
  import List from '@/components/body1/List.vue'
    export default {
        components: {
            List
        },

      data() {
        return {
          lists: ['这是App1', 'css'],
          message: 'js'
        }
      },
      methods: {
        submit() {
          if(!this.message) return
          this.lists.push(this.message)
          this.message = ''
        }
      },
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>