import express, { Response, Request } from 'express';

const app = express();

// set 함수로 뷰엔진 설정
// set 함수에는 무엇이듯 할당할 수 있으나 일부 지정된 키값은 설정용도로 사용된다.
// setting table 
// https://expressjs.com/ko/4x/api.html#app.settings.table
app.set('view engine', 'pug');
app.set('views', ['src/views']);

app.use('*', (request, response) => {
    console.log('request', request.baseUrl)
})

app.get('/', (request, response) => {
    // render의 index는 루트경로의 views 디렉토리를 기본으로 한다.
    response.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(8888, () => {
    console.log('listening 8888 port...');
});