const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

//과제 : console.table을 늘려서 전체시간 얼마나 느는지 체크

console.time('전체시간'); //전체시작 추적 시작(가장 마지막줄에 timeEnd)
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요'); //에러 메시지 출력하는 메소드(빨갛게 출력됨)

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]); //표를 만드는 메소드
console.table([{ name: '제로', birth: 2001 }, { name: 'hero', birth: 1987}]); //표를 만드는 메소드

console.dir(obj, { colors: true, depth: 3 });  //depth를 3해서 시간 얼마나 느는지 체크해보기(과제라서 함)
console.dir(obj, { colors: false, depth: 2 });  //depth를 2개하면 2개 나옴
console.dir(obj, { colors: true, depth: 1 });   //depth를 1개 하면 1개 나옴 (터미널로 확인할것)

console.time('시간측정');  //중간에 있는 time(전체시간과 다른 놈)
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정'); //측정할때마다 다르게 나옴 (반복문 사용해서 시간 측정)

function b() {
  console.trace('에러 위치 추적'); //에러위치 출력하는 메소드
}
function a() {
  b();
}
a();

console.timeEnd('전체시간'); //에러 위치까지 출력한 후 마지막으로 전체 시간
