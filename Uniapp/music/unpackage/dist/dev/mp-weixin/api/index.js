"use strict";
const common_vendor = require("../common/vendor.js");
const api_request = require("./request.js");
const apiGetBanner = (data) => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/banner",
    method: "get",
    data,
    authType: "None"
  });
};
const apiGetBall = () => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/homepage/dragon/ball",
    method: "get"
  });
};
exports.apiGetBall = apiGetBall;
exports.apiGetBanner = apiGetBanner;
