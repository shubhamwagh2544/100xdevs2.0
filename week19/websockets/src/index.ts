import http from 'http'
import { WebSocket, WebSocketServer } from 'ws'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message: 'Hello From Server!'
    }))
})

// websocket
const websocketserver = new WebSocketServer({ server: server })
websocketserver.on('connection', function connection(socket) {
    // error event
    socket.on('error', function error(error) {
        console.log(error)
    })

    // message event
    socket.on('message', function message(data, isBinary) {
        websocketserver.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary })
            }
        })
    })

    // connection message
    socket.send('Hello from WebSocket!')
})

server.listen(3000, 'localhost', () => console.log('server started listening!'))