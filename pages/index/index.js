// index.js

const util = require("../../utils/util")

// 获取应用实例
const app = getApp()

Page({
  data: {
    loanAmountDevideTenThousand: 50,
    loanYear: 30,
    yearlyInterestRateMultiHundred: 4.8,
    monthlyIncome: 0,
    remainingCashDevideTenThousand: 0,
    monthlySalaryDevideThousand: 0,
    yearlyROIRateMultiHundred: 0.0,
    equalPrincipalMessage: '',
    equalInterestMessage: '',
    equalPrincipalTotalIncomeMessage: '',
    equalInterestTotalIncomeMessage: '',

    showClearButton: false,
    showTopTips: false,
    rules: [{
      name: 'loanAmount',
      rules: { required: true, message: '贷款金额是必填项' },
    }, {
      name: 'loanYear',
      rules: { required: true, message: '贷款年限是必填项' },
    }, {
      name: 'yearlyInterestRate',
      rules: { required: true, message: '贷款利率是必填项' },
    }],
    formatData: {

    }
  },

  onLoad() {
  },


  loanAmountChange(e) {
    this.setData({
      loanAmountDevideTenThousand: e.detail.value
    });
  },

  loanYearChange(e) {
    this.setData({
      loanYear: e.detail.value
    });
  },

  yearlyInterestRateChange(e) {
    this.setData({
      yearlyInterestRateMultiHundred: e.detail.value
    });
  },

  remainingCashChange(e) {
    this.setData({
      remainingCashDevideTenThousand: e.detail.value
    });
  },

  monthlySalaryChange(e) {
    this.setData({
      monthlySalaryDevideThousand: e.detail.value
    });
  },

  yearlyROIRateChange(e) {
    this.setData({
      yearlyROIRateMultiHundred: e.detail.value
    });
  },

  submitForm() {
    let loanAmount = this.data.loanAmountDevideTenThousand * 10000;
    let loanMonth = this.data.loanYear * 12;
    let monthlyInterestRate = this.data.yearlyInterestRateMultiHundred / (12 * 100);
    let result1 = util.calculateEqualPrincipal(loanAmount, loanMonth, monthlyInterestRate);
    let result2 = util.calculateEqualInterest(loanAmount, loanMonth, monthlyInterestRate);
    this.setData({
      equalPrincipalMessage: result1.message,
      equalInterestMessage: result2.message,
      showClearButton: true
    });

    let remainingCash = this.data.remainingCashDevideTenThousand * 10000;
    let monthlySalary = this.data.monthlySalaryDevideThousand * 1000;
    let monthlyROIRate = this.data.yearlyROIRateMultiHundred / (12 * 100);

    try {
      let result3 = util.calculateTotalIncome(result1.monthlyPayments, loanMonth, remainingCash, monthlySalary, monthlyROIRate);
      this.setData({
        equalPrincipalTotalIncomeMessage: '\n选择等额本金最后收益:' + result3.message
      });
    } catch (error) {
      this.setData({
        equalPrincipalTotalIncomeMessage: '\n选择等额本金: \n' + error + '\n'
      })
    }

    try {
      let result4 = util.calculateTotalIncome(result2.monthlyPayments, loanMonth, remainingCash, monthlySalary, monthlyROIRate);
      this.setData({
        equalInterestTotalIncomeMessage:  '选择等额本息最后收益:' + result4.message
      });
    } catch (error) {
      this.setData({
        equalInterestTotalIncomeMessage: '选择等额本息: \n' + error + '\n'
      })
    }

  },

  clearResult() {
    this.setData({
      equalPrincipalMessage: '',
      equalInterestMessage: '',
      equalInterestTotalIncomeMessage: '',
      equalPrincipalTotalIncomeMessage:'',
      showClearButton: false
    });
  }
})
