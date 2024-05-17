"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
// create express app
const app = (0, express_1.default)();
// json body parser
app.use(express_1.default.json());
// create redis client
const client = (0, redis_1.createClient)();
client.on('error', (err) => console.log('redis client error: ', err));
// submit endpoint
app.post('/submit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;
    try {
        // push submission to worker in redis
        client.lPush("submissions", JSON.stringify({ problemId, code, language }));
        // store in db
        // prisma.submissions.create({})
        return res.status(200).json({
            problemId,
            message: 'code submission succeeded'
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'code submission failed',
            error: err
        });
    }
}));
// Global error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({
        status: 'error',
        message: err.message,
    });
    next();
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // connect redis client
            yield client.connect();
            console.log('redis client connected');
            // start http server
            app.listen(3000, () => console.log('http server started at 3000'));
        }
        catch (err) {
            console.log('failed to connect to redis: ', err);
        }
    });
}
startServer();
