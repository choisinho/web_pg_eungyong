const exec = require('child_process').exec;

// var process = exec('dir'); //도스 명령어 넣으면 실행됨
// var process = exec('mkdir nodejs1');
var process = exec('rd nodejs1');

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
