import express from 'express';
import jwt from 'jsonwebtoken'
const app = express()

let requestCount = 0;

// analytics : counting total requests
app.use(
    function middleware(req, res, next) {
        if (req.url !== '/favicon.ico') {
            requestCount++;
        }
        next()
    }
)

// auth middleware
app.use(
    function authmiddleware(req, res, next) {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({ msg: 'invalid authentication' })
        }
        const token = authorization.split(" ")[1]
        const decoded = jwt.verify(token, "secret_key");
        if (decoded) {
            next()
        }
        else {
            return res.status(401).json({
                msg: 'unauthorized'
            })
        }
    }
)

app.get('/', (req, res) => {
    res.json({
        msg: 'hello world'
    })
})

app.get('/requestCount', (req, res) => {
    res.json({
        requestCount
    })
})

app.listen(3000)