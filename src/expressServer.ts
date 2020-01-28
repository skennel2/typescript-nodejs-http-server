import express, { Response, Request } from 'express';
import { NextFunction } from 'connect';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

var app = express();

/**
 * 사용자 정의 미들웨어 사용
 */
app.use((request: Request, response: Response, next: NextFunction) => {
    console.log('accept request');
    next();
});

/**
 * 정적파일 미들웨어 등록
 */
app.use(express.static(path.join(__dirname, '..', 'public')));

/**
 * response와 repuest에 cookie 관련 속성과 메소드가 추가된다.
 */
app.use(cookieParser());

/**
 * express-session 패키지
 * request에 session 속성을 부여한다.
 */
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}))

/**
 * morgan 외부 미들웨어 
 * 로그 출력에 사용된다.
 */
app.use(morgan('combined'));

app.get("/", (request: Request, response: Response) => {
    response.end('<h1>default<h1>');
});

app.get("/hello", (request: Request, response: Response) => {
    response.end('<h1>hello</h1>');
});

app.get("/param/:id", (request: Request, response: Response) => {
    const id = request.params.id;
    response.end('<h1> parameter:' + id + '</h1>');
});

app.get("/setcookie", (request: Request, response: Response) => {
    response.cookie('cookie', {
        name: 'test-cookie',
        value: 'this is test cookie',
        created: new Date()
    });

    response.end('<h1>쿠키가 설정 되었습니다.</h1>');
});

app.get("/getcookie", (request: Request, response: Response) => {
    const cookie = request.cookies.cookie;
    if(cookie) {
        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    } else {
        response.end('<h1>no cookie</h1>');
    }
});

app.get("/clearcookie", (request: Request, response: Response) => {
    response.clearCookie('cookie');
    response.end('<h1>cookie clear</h1>');

});

app.get("/setsession", (request: Request, response: Response) => {
    request.session!.now = new Date().toUTCString();

    response.end('<h1>sesseion 설정</h1>');
});

app.get("/getsession", (request: Request, response: Response) => {
    response.json(request.session);
})

app.get("/clearsession", (request: Request, response: Response) => {
    request.session!.destroy(() => {
        response.end('<h1>sesseion destroy</h1>');
    });
})

/**
 * 전체 선택 라우팅, 앞서 선언한 라우팅에 해당하는것이 없을 때 처리된다.
 */
app.all("*", (request: Request, response: Response) => {
    response.end('<h1>전체 선택자</h1>');
});

app.route('/api')
    .get((request: Request, response: Response) => {
        response.json({
            name: 'na yuns su'
        });
    })
    
app.listen(8888, () => {
    console.log('listening 8888 port...');
});
