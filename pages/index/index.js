// index.js

const util = require("../../utils/util")

// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },

  onLoad() {
    util.calculateEqualPrincipal(500000, 360, 0.045/12);
    util.calculateEqualInterest(500000, 360, 0.045/12);
    
  }

})
