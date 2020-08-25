"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
app.get('*', function (req, res) {
});
var ioApp = socket_io_1.default(http_1.default);
ioApp.on('connection', function (socket) {
    console.log('a user connected');
});
app.listen(8888);
