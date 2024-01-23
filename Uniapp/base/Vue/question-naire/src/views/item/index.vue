<template>
    <div>
        <ItemContainer parent-component="item"></ItemContainer>
    </div>
</template>
 
<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from "vuex";
    export default {
        components: {
            ItemContainer
        },
        created() {
            this.getQuestionListAction()
        },
        methods: {
            ...mapActions(['getQuestionListAction'])
        },
    }
</script>

<style lang="less" scoped>

</style>