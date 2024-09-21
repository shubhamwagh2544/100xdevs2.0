const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const userRouter = require("./user");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

app.get('/health', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.use('/user', userRouter);

io.on('connection', (socket) => {
    console.log('a user connected on socket');
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
