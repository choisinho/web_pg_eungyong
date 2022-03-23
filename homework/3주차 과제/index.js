// const { odd, even } = require('./var'); //var.js를 의미
//const checkNumber = require('./func');  //func.js를 의미

// function checkStringOddOrEven(str) {
//   if ((str.length % 3)==0) { 
//     return odd;
//   }
//   return even;
// }

// console.log(checkNumber(10));
// console.log(checkStringOddOrEven('hello'));

//과제 : 3으로 나누었을 때 나머지가 1인지 2인지, 3의 배수인지 구분
//원래 과제는 js 파일을 하나 더 만들어서 모듈을 따로 코딩하는 거였음
//따라서 파일은 2개 더 있어야 하는데 나는 그냥 원래 코드에 추가했음
//그래서 과제 제출할 때 이런 언급이 있어야 함

const { namIsOne, namIsTwo, threeBaesu } = require('./var'); //var.js를 의미
const checkNumber = require('./func');  //func.js를 의미

function checkStringThreeBaesu(str) {
  if ((str.length % 3) == 0) {
    return threeBaesu;
  } else if ((str.length % 3) == 1) {
    return namIsOne;
  } else if ((str.length % 3) == 2) {
    return namIsTwo;
  } else {
    return 0;
  }
}

console.log(checkNumber(10));
console.log(checkStringThreeBaesu('hello'));