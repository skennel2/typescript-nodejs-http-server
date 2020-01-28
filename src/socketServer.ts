import express, { Response, Request } from 'express';
import http from 'http';
import io from 'socket.io';

let app = express();

app.get('*', (req: Request, res: Response)=>{
    
})

let ioApp = io(http);
ioApp.on('connection', (socket) => {
    console.log('a user connected');
});


app.listen(8888);
