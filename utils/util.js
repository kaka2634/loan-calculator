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
  console.log(`第一个月应还 ${monthlyPayments[0]}， 每月递减  ${decsInterest}`)
  console.log(`总利息： ${loanInterest} `);

  let result = {
    type: 'EqualPrincipal',
    monthlyPrincipal: monthlyPrincipal,
    monthlyInterests: monthlyInterests,
    monthlyPayments: monthlyPayments,
    loanInterest: loanInterest,
    decsInterest: decsInterest
  }
  return result;
}

const calculateEqualInterest = (loanAmount, loanMonth, monthlyInterestRate) => {
  let factor = Math.pow((1 + monthlyInterestRate), loanMonth);
  let monthlyPayment = loanAmount * (monthlyInterestRate * factor) / (factor - 1);
  let loanInterest = monthlyPayment * loanMonth - loanAmount;
  
  console.log(`每月应还 ${monthlyPayment}`)
  console.log(`总利息： ${loanInterest} `);
  
  let result = {
    type: 'EqualInterest',
    monthlyPayment: monthlyPayment,
    loanInterest: loanInterest,
  }
  return result;

}

module.exports = {
  calculateEqualPrincipal,
  calculateEqualInterest
}
