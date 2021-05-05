// 等额本金
const calculateEqualPrincipal = (loanAmount, loanMonth, monthlyInterestRate) => {
  let monthlyPrincipal = loanAmount / loanMonth;
  let monthlyInterest = loanAmount * monthlyInterestRate;
  let decsInterest = monthlyPrincipal * monthlyInterestRate;

  let loanInterest = 0;
  let monthlyInterests = [];
  let monthlyPayments = [];
  for (let i = 0; i < loanMonth; ++i) {
    let monthlyPayment = monthlyInterest + monthlyPrincipal;
    monthlyInterests.push(monthlyInterest);
    monthlyPayments.push(monthlyPayment);
    loanInterest = loanInterest + monthlyInterest;
    //更新下一个月的利息
    monthlyInterest = monthlyInterest  - decsInterest;

  }
  let message = `等额本金：\n`;
  message +=`第一个月应还 ${monthlyPayments[0].toFixed(2)}， 每月递减  ${decsInterest.toFixed(2)}\n`;
  message +=`总利息： ${loanInterest.toFixed(2)} \n`;

  let result = {
      monthlyPrincipal: monthlyPrincipal,
      monthlyInterests: monthlyInterests,
      monthlyPayments: monthlyPayments,
      loanInterest: loanInterest,
      decsInterest: decsInterest,
      message : message
  }
  return result;
}

const calculateEqualInterest = (loanAmount, loanMonth, monthlyInterestRate) => {
  let factor = Math.pow((1 + monthlyInterestRate), loanMonth);
  let monthlyPayment = loanAmount * (monthlyInterestRate * factor) / (factor - 1);
  let loanInterest = monthlyPayment * loanMonth - loanAmount;
  let message = `等额本息：\n`;
  message +=`每月应还 ${monthlyPayment.toFixed(2)}\n`;
  message +=`总利息： ${loanInterest.toFixed(2)} `;
  
  let result = {
      monthlyPayment: monthlyPayment,
      loanInterest: loanInterest,
      message : message
  }
  return result;

}

module.exports = {
  calculateEqualPrincipal,
  calculateEqualInterest
}
