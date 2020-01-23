"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(function (request, response, next) {
    console.log('accept request');
    next();
});
app.get("/", function (request, response) {
    response.end('<h1>default<h1>');
});
app.get("/hello", function (request, response) {
    response.end('<h1>hello</h1>');
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
