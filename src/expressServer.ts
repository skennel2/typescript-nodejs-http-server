import express, { Response, Request } from 'express';

var app = express();

app.use((request: Request, response: Response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    
    response.end('<h1>hello world</h1>');
});

app.listen(8888, () => {
    console.log('listening 8888 port...');
})

