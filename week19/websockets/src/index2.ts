import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express()

const server = app.listen(3000, () => console.log('server started listening!'))

// websocket
const websocketserver = new WebSocketServer({ server: server })

websocketserver.on('connection', function connection(socket) {
    // error
    socket.on('error', function error(error) {
        console.log(error)
    })

    // message
    socket.on('message', function message(data, isBinary) {
        websocketserver.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary })
            }
        })
    })

    socket.send('Hello from WebSocket!')
})