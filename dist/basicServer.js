"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var server = http.createServer();
server.on('request', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.end('<h1>' + request.url + '</h1>');
});
server.listen(8888);
console.log('port 8888 listen...');
