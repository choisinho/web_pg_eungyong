// const fs = require('fs');

// console.log('시작');
// let data = fs.readFileSync('./readme2.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme2.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme2.txt');
// console.log('3번', data.toString());
// console.log('끝');

const fs = require('fs');

console.log('시작');
console.time('시간체크');

var number;
let data = fs.readFileSync('./readme2.txt');

for (let i = 0; i < 500; i++) {
    data = fs.readFileSync('./readme2.txt');
    number = (i+1).toString() + "번";
    console.log(number, data.toString());
}

console.timeEnd('시간체크');
console.log('끝');
