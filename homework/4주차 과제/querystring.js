const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

//여기서부터 수정
console.log('===========================================================');
console.log('===========================================================');
const parsedUrl2 = url.parse('https://search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%EB%85%B8%EB%93%9Cjs');
const query2 = querystring.parse(parsedUrl2.query);
console.log('네이버에 노드js 검색 : querystring.parse():', query2);
console.log('네이버에 노드js 검색 : querystring.stringify():', querystring.stringify(query2));
console.log('===========================================================');
console.log('===========================================================');
const parsedUrl3 = url.parse('https://namu.wiki/w/2022%EB%85%84%20%EB%9F%AC%EC%8B%9C%EC%95%84%EC%9D%98%20%EC%9A%B0%ED%81%AC%EB%9D%BC%EC%9D%B4%EB%82%98%20%EC%B9%A8%EA%B3%B5?from=%EC%9A%B0%ED%81%AC%EB%9D%BC%EC%9D%B4%EB%82%98%20%EC%A0%84%EC%9F%81');
const query3 = querystring.parse(parsedUrl3.query);
console.log('나무위키에 우크라이나 전쟁 검색 : querystring.parse():', query3);
console.log('나무위키에 우크라이나 전쟁 검색 : querystring.stringify():', querystring.stringify(query3));