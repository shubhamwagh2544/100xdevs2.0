"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        message: 'Hello From Server!'
    }));
});
// websocket
const websocketserver = new ws_1.WebSocketServer({ server: server });
websocketserver.on('connection', function connection(socket) {
    // error event
    socket.on('error', function error(error) {
        console.log(error);
    });
    // message event
    socket.on('message', function message(data, isBinary) {
        websocketserver.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    // connection message
    socket.send('Hello from WebSocket!');
});
server.listen(3000, 'localhost', () => console.log('server started listening!'));
