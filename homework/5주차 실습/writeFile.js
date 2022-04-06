const fs = require('fs');

fs.writeFile('./folder/writeme.txt', '내용 바꿔보기', (err) => { //상대경로임(5주차폴더에서)
  if (err) {
    throw err;
  }
  fs.readFile('./folder/writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
