<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确实</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
    data() {
        return {
          message: ''
        }
      },
      methods: {
        submit() {
            this.listsAdd(this.message)
        },
        ...mapMutations(['listsAdd'])
      },
    }
</script>

<style lang="css" scoped>

</style>