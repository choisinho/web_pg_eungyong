const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<body bgcolor="green"> <h1>Hello Node!</h1> </body>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8081, () => { // 서버 연결
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<body bgcolor="blue"> <h1>Hello Node!</h1> </body>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8082, () => { // 서버 연결
    console.log('8082번 포트에서 서버 대기 중입니다!');
  });
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<body bgcolor="red"> <h1>Hello Node!</h1> </body>');
    res.end('<p>Hello Server!</p>');
  })
    .listen(8083, () => { // 서버 연결
      console.log('8083번 포트에서 서버 대기 중입니다!');
    });

    //localhost:8083 이거랑 114.70.216.104:8083 이거는 같음.