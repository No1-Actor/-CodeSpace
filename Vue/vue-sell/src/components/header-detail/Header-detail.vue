<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapepr">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <div class="star">
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <div class="support">
            <li class="support-item">
              <span class="decrease"></span>
              <span class="text">{{ seller.supports[0].description }}</span>
            </li>
            <li class="support-item">
              <span class="discount"></span>
              <span class="text">{{ seller.supports[1].description }}</span>
            </li>
            <li class="support-item">
              <span class="special"></span>
              <span class="text">{{ seller.supports[2].description }}</span>
            </li>
            <li class="support-item">
              <span class="invoice"></span>
              <span class="text">{{ seller.supports[3].description }}</span>
            </li>
            <li class="support-item">
              <span class="guarantee"></span>
              <span class="text">{{ seller.supports[4].description }}</span>
            </li>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">
              {{ seller.bulletin }}
            </p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click.stop="hideDetail">X</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      default: () => {},
    },
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
  .detail-wrapepr{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    overflow: hidden;
    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;
      .name {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        text-align: center;
      }
      .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
        .star{
          align-items: center;
          display: flex;
          justify-content: center;
        }
         .star-item{
            background-size: 20px 20px;
            height: 20px;
            margin-right: 22px;
            width: 20px;
            background-image: url('./1.png');
            background-repeat: no-repeat;
        }
      }
      .title{
        display: flex;
        margin: 28px auto 24px;
        width: 80%;
        .line{
          border-bottom: 1px solid hsla(0,0%,100%,.2);
          flex: 1;
          position: relative;
          top: -6px;
        }
        .text{
          font-size: 14px;
          font-weight: 700;
          padding: 0 12px;
        }
      }
      .support{
        margin: 0 auto;
        width: 80%;
        .support-item{
          align-items: center;
          display: flex;
          margin-bottom: 12px;
          padding: 0 12px;
          .decrease{
            margin-right: 6px;
          }
          .discount{

          }
          .special{

          }
          .invoice{

          }
          .guarantee{
            
          }
        }
      }
      .bulletin{
        display: flex;
        margin: 28px auto 24px;
        width: 80%;
        .content{
          font-size: 12px;
          line-height: 24px;
          padding: 0 12px;
        }
      }
    }
  }
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
