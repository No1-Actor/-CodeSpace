// App -> Page的桥梁
// 微信提供 应用对象
const app = getApp()

Page({
    // 页面数据
  data: {
    // user: {}
    slides: null,
    entities: null,
  },
  // 生命周期
  onLoad(){
    // this -> Page
    // console.log(app);
    // 响应式页面 
    setTimeout(()  => {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles,
    })
  },2000)
  },
  onReady(){
    console.log('ready GO');
  }
})

