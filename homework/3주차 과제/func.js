// const { odd, even } = require('./var'); //var.js를 의미

// function checkOddOrEven(num) {
//   if (num % 2) { // 홀수면
//     return odd;
//   }
//   return even;
// }

// module.exports = checkOddOrEven;

const { namIsOne, namIsTwo, threeBaesu } = require('./var'); //var.js를 의미

function checkThreeBaesu(num) {
  if ((num % 3) == 0) {
    return threeBaesu;
  } else if ((num % 3) == 1) {
    return namIsOne;
  } else if ((num % 3) == 2) {
    return namIsTwo;
  } else {
    return 0;
  }
}

module.exports = checkThreeBaesu;
