<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapepr">
        <div class="detail-main">
          <h1 class="name">店铺名称</h1>
        </div>
      </div>
      <div class="detail-close" @click.stop="hideDetail">X</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    hideDetail() { // 子父组件通讯
      this.$emit('hide',false) // 创建一个hide事件 触发父组件的事件
    }
  },
};
</script>

<style lang="less" scoped>
@import "@/common/style/variable.less";
.header-detail {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: @color-background-s;
  color: @color-white;
  backdrop-filter: blur(10px); // 底层背景虚化
  &.fade-enter-from,
  &.fade-leave-to {
    // 进入和离开的状态
    opacity: 0; // 透明度
    background: @color-background;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    // 进入和离开的过渡动画
    transition: all 0.5s ease; // 过渡动画 ease 逐渐变慢
  }
}

.detail-close {
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  margin-left: -15px;
  text-align: center;
  line-height: 30px;
}
</style>
