const http = require('http');
const fs = require('fs').promises;

// http.createServer(async (req, res) => {
//   try {
//     const data = await fs.readFile('./server2.html');
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end(data);
//   } catch (err) {
//     console.error(err);
//     res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
//     res.end(err.message);
//   }
// })
//   .listen(8084, () => {
//     console.log('8081번 포트에서 서버 대기 중입니다!');
//   });

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./8081.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./8082.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다!');
  });
  