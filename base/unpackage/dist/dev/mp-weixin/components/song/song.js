"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "song",
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.data.img
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/hongk/Desktop/CodeSpace/Uniapp/base/base/components/song/song.vue"]]);
wx.createComponent(Component);
