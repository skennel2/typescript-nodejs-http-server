import * as http from 'http';

let server = http.createServer();

server.on('request', (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });

    response.end('<h1>hello world</h1>');
});

server.listen(8888);

console.log('port 8888 listen...');