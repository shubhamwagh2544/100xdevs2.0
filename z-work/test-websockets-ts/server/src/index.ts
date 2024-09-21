import express, {Request, Response} from 'express';
const app = express();
import {Server} from 'socket.io';
import http from 'http';
import Userroute from "./userroute";

const httpServer = http.createServer(app);
const userroute = Userroute.getInstance();

const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
    },
});

app.use('/users', userroute.getRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

io.on('connection', (socket: any) => {
    console.log('Socket connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
    });
});

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});