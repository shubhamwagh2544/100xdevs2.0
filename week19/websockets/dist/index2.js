"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const server = app.listen(3000, () => console.log('server started listening!'));
// websocket
const websocketserver = new ws_1.WebSocketServer({ server: server });
websocketserver.on('connection', function connection(socket) {
    // error
    socket.on('error', function error(error) {
        console.log(error);
    });
    // message
    socket.on('message', function message(data, isBinary) {
        websocketserver.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    socket.send('Hello from WebSocket!');
});
