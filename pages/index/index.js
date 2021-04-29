// index.js

const util = require("../../utils/util")

// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },

  onLoad() {
    util.calculateEqualPrincipal(50, 30, 4.5);
    util.calculateEqualInterest(50, 30, 4.5);
  }

})
