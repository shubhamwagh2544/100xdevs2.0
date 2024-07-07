"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
let requestCount = 0;
// analytics : counting total requests
app.use(function middleware(req, res, next) {
    if (req.url !== '/favicon.ico') {
        requestCount++;
    }
    next();
});
// auth middleware
app.use(function authmiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'invalid authentication' });
    }
    const token = authorization.split(" ")[1];
    const decoded = jsonwebtoken_1.default.verify(token, "secret_key");
    if (decoded) {
        next();
    }
    else {
        return res.status(401).json({
            msg: 'unauthorized'
        });
    }
});
app.get('/', (req, res) => {
    res.json({
        msg: 'hello world'
    });
});
app.get('/requestCount', (req, res) => {
    res.json({
        requestCount
    });
});
app.listen(3000);
