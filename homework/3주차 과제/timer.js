const timeout = setTimeout(() => {
  console.log('1.5초 후 실행 - timeout');
}, 1500); //1.5초

const interval = setInterval(() => {
  console.log('1초마다 실행 - interval');
}, 1000); //1초 반복

const timeout2 = setTimeout(() => {
  console.log('3초 후 실행 - timeout');
}, 3000); //3초

//과제 : 1초마다 실행과 1.5초후 실행을 하나씩 더 추가하고 3초될때 우선순위 확인

setTimeout(() => {
  clearTimeout(timeout2); //시간 멈추게 하는 메소드 -> 3.5초 후 타임아웃
  clearInterval(interval); //인터벌 멈추게 하는 인터벌 -> 3.5초 후 인터벌 종료
}, 3500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다');
});

clearImmediate(immediate2);
