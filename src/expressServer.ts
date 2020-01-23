import express, { Response, Request } from 'express';
import { NextFunction } from 'connect';

var app = express();
app.use((request: Request, response: Response, next: NextFunction) => {
    console.log('accept request');
    next();
})

app.get("/", (request: Request, response: Response) => {
    response.end('<h1>default<h1>');
});

app.get("/hello", (request: Request, response: Response) => {
    response.end('<h1>hello</h1>');
});

//17 18 19 20

app.route('/api')
    .get((request: Request, response: Response) => {
        response.json({
            name: 'na yuns su'
        });
    })
    

app.listen(8888, () => {
    console.log('listening 8888 port...');
});
