"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
/**
 * 사용자 정의 미들웨어 사용
 */
app.use(function (request, response, next) {
    console.log('accept request');
    next();
});
/**
 * 정적파일 미들웨어 등록
 */
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
/**
 * response와 repuest에 cookie 관련 속성과 메소드가 추가된다.
 */
app.use(cookie_parser_1.default());
/**
 * morgan 외부 미들웨어
 * 로그 출력에 사용된다.
 */
app.use(morgan_1.default('combined'));
app.get("/", function (request, response) {
    response.end('<h1>default<h1>');
});
app.get("/hello", function (request, response) {
    response.end('<h1>hello</h1>');
});
app.get("/param/:id", function (request, response) {
    var id = request.params.id;
    response.end('<h1> parameter:' + id + '</h1>');
});
app.get("/setcookie", function (request, response) {
    response.cookie('cookie', {
        name: 'test-cookie',
        value: 'this is test cookie',
        created: new Date()
    });
    response.end('<h1>쿠키가 설정 되었습니다.</h1>');
});
app.get("/getcookie", function (request, response) {
    var cookie = request.cookies.cookie;
    if (cookie) {
        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    }
    else {
        response.end('<h1>no cookie</h1>');
    }
});
app.get("/clearcookie", function (request, response) {
    response.clearCookie('cookie');
    response.end('<h1>cookie clear</h1>');
});
/**
 * 전체 선택 라우팅 앞서 선언한 라우팅 처리에 해당하는것이 없으때 사용된다.
 */
app.all("*", function (request, response) {
    response.end('<h1>전체 선택자</h1>');
});
app.route('/api')
    .get(function (request, response) {
    response.json({
        name: 'na yuns su'
    });
});
app.listen(8888, function () {
    console.log('listening 8888 port...');
});
