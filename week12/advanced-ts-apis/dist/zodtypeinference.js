"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const ZodStringSchema = zod_1.default.string(); // runtime variable
// use case
const UpdateBodySchema = zod_1.default.object({
    name: zod_1.default.string(),
    age: zod_1.default.number(),
    username: zod_1.default.string()
});
app.get('/', (req, res) => {
    //const updateBody: UpdateBodyType = req.body
    const updateBody = req.body;
    const { success } = UpdateBodySchema.safeParse(req.body);
    // logic
    return res.status(200).json({
        message: 'Success!'
    });
});
app.listen(3000, () => { console.log('Server is running on port 3000'); });
