"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.post('/', (req, res) => {
    // take data from frontend
    const todo = req.body;
    console.log(todo);
    return res.send('hi there');
});
app.listen(port, () => console.log(`server started on port ${port}`));
