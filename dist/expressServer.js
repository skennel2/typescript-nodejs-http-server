"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.end('<h1>hello world</h1>');
});
app.listen(8888, function () {
    console.log('listening 8888 port...');
});
