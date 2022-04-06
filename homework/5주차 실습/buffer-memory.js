const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./readme.txt');
fs.writeFileSync('./readme.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
