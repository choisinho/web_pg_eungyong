const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<body bgcolor="green"> <h1>Hello Node!</h1> <hr> <img src="https://postfiles.pstatic.net/MjAxOTEwMTNfMTc1/MDAxNTcwOTc0Mzk2OTM3.n-Fcinby623u4XMSgtkrH_rbUD8XvxtY98OA-Y13NeEg.vBKvzRObv5kLGCcIkT0dDy-8CV6HD5KapOFWRL35mhAg.PNG.choi_sinho/%EB%A0%88%ED%84%B0%EB%A7%81.png?type=w773" alt="최신호 블로그 로고" width="200" height="200"> </body>')
  res.end('<p>this is just ye-je.</p>');
})
  .listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });


  //실행시키고 웹브라우저에서 http://localhost:8080/를 주소창에 입력해보자.
