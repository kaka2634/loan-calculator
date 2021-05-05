// index.js

const util = require("../../utils/util")

// 获取应用实例
const app = getApp()

Page({
  data: {
    loanAmountDevideTenThousand: 50,
    loanYear: 30,
    yearlyInterestRateMultiHundred: 4.8,
    equalPrincipalMessage: '',
    equalInterestMessage: ''
  },

  onLoad() {

  },

  loanAmountChange(e) {
    this.setData({
      loanAmountDevideTenThousand: e.detail.value
    })
  },

  loanYearChange(e) {
    this.setData({
      loanYear: e.detail.value
    })
  },

  yearlyInterestRateChange(e) {
    this.setData({
      yearlyInterestRateMultiHundred: e.detail.value
    })
  },

  submitForm() {
    console.log(this.data.loanAmountDevideTenThousand, this.loanYear, this.yearlyInterestRateMultiHundred);
    let loanAmount = this.data.loanAmountDevideTenThousand * 10000;
    let loanMonth = this.data.loanYear * 12;
    let monthlyInterestRate = this.data.yearlyInterestRateMultiHundred / (12 * 100);
    let result1 = util.calculateEqualPrincipal(loanAmount, loanMonth, monthlyInterestRate);
    let result2 = util.calculateEqualInterest(loanAmount, loanMonth, monthlyInterestRate);
    this.setData({
        equalPrincipalMessage: result1.message,
        equalInterestMessage: result2.message
    });
  }
})
