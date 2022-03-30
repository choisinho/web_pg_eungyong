const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';
// const key = 'abcdefghijklmnopqrstuvwxyz123456';
// const iv = '1234567890123456';

// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// result += cipher.final('base64');
// console.log('암호화:', result);

// const decipher = crypto.createDecipheriv(algorithm, key, iv);
// let result2 = decipher.update(result, 'base64', 'utf8');
// result2 += decipher.final('utf8');
// console.log('복호화:', result2);

//여기서부터 수정
// console.log('===========================================================');
// console.log('===========================================================');

// const algorithm2 = 'aes-256-cbc';
// const key2 = 'abcdefghijklmnopqrstuvwxyz123456';
// const iv2 = '1234567890123456';

// const cipher2 = crypto.createCipheriv(algorithm2, key2, iv2);
// let res1 = cipher2.update('암호화할 문장', 'utf8', 'latin1');
// res1 += cipher2.final('latin1');
// console.log('암호화:', res1);

// const decipher2 = crypto.createDecipheriv(algorithm2, key2, iv2);
// let res2 = decipher2.update(res1, 'latin1', 'utf8');
// res2 += decipher2.final('utf8');
// console.log('복호화:', res2);
//latin1 넣어보기 

console.log('===========================================================');
console.log('===========================================================');

const algorithm2 = 'aes-256-cbc';
const key2 = 'abcdefghijklmnopqrstuvwxyz123456';
const iv2 = '1234567890123456';

const cipher2 = crypto.createCipheriv(algorithm2, key2, iv2);
let res1 = cipher2.update('쩨쩩쩪쩫쩬쩭쩮쩯쩰쩱쩲쩳쩴쩵쩶쩷쩸쩹쩺쩻쩼쩽쩾쩿쪀쪁쪂쪃', 'utf8', 'hex');
res1 += cipher2.final('hex');
console.log('암호화:', res1);

const decipher2 = crypto.createDecipheriv(algorithm2, key2, iv2);
let res2 = decipher2.update(res1, 'hex', 'utf8');
res2 += decipher2.final('utf8');
console.log('복호화:', res2);
//hex 넣어보기 + 이상한 글자 넣어보기