"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const token = jsonwebtoken_1.default.sign({
        username
    }, "TEST_SECRET");
    res.cookie("token", token);
    res.send("User signed up");
});
app.get('/me', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "TEST_SECRET");
        res.send(decoded);
    }
    catch (error) {
        res.status(401).send("Unauthorized");
    }
});
app.post('/logout', (req, res) => {
    res.clearCookie("token");
    res.send("Logged out");
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
