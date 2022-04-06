const fs = require('fs');

fs.readFile('./errortest.txt', (err, data) => { //일부러 틀린이름
  if (err) {    
    throw err;    
  }
  console.log(data);
  console.log(data.toString());
});
