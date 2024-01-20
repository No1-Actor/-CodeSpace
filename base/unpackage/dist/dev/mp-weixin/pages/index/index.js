"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  song();
}
const song = () => "../../components/song/song.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    const name = getApp().globalData.name;
    console.log(name);
    const changTitle = () => {
      title.value = title.value === "你好" ? "hello" : "你好";
    };
    const reverseTitle = common_vendor.computed(() => {
      return title.value.split("").reverse().join("");
    });
    const list = common_vendor.reactive({
      song: {
        img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708170012&t=d339800be27bd8e7c4a14d8c264436f9",
        title: "价格",
        price: "10",
        marketPrice: "13"
      }
    });
    const goAbout = () => {
      common_vendor.index.navigateTo({
        // uni路由跳转
        url: "/pages/about/about"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goAbout),
        b: common_vendor.t(title.value),
        c: common_vendor.t(common_vendor.unref(reverseTitle)),
        d: common_vendor.o(changTitle),
        e: common_vendor.p({
          data: list.song
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/hongk/Desktop/CodeSpace/Uniapp/base/base/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
