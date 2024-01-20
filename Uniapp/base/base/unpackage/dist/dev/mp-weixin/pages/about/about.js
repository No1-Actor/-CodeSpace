"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "about",
  setup(__props) {
    common_vendor.onMounted(() => {
      const reqTask = common_vendor.index.request({
        url: "https://mock.mengxuegu.com/mock/65a91549c4cd67421b34c8ab/movie/movieList",
        method: "get",
        success: (res) => {
          console.log(res);
          common_vendor.index.setStorage({
            key: "movieName",
            data: res.data.moveList[0].nm,
            success() {
              common_vendor.index.showToast({
                title: "保存成功",
                duration: 2e3,
                icon: "success"
              });
            }
          });
        }
      });
      reqTask.abort();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/hongk/Desktop/CodeSpace/Uniapp/base/base/pages/about/about.vue"]]);
wx.createPage(MiniProgramPage);
