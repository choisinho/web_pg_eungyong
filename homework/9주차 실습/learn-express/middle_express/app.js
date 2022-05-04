const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); //morgan을 tiny로 하면 로그 출력을 축약 가능
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET)); //.env파일의 cookie_secret을 사용
app.use(session({ //옵션들
    resave: false, //변경사항 있으면 저장할거냐? 
    saveUninitialized: false, //저장하고 초기화
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, //http 환경에서만 쿠키 정보 확인하냐 안하냐 
        secure: false, //쿠키에 있는 정보를 주고 받을수 있냐
        // signed: false, //서명 옵션
    },
    name: 'session-cookie',
}));
app.use((req, res, next) =>  {
    console.log('모든 요청에 다 실행');
    next();
});
app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행');
    next();
}, (req, res) => {
    throw new Error('에러는 에러처리 미들웨어로');
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
  