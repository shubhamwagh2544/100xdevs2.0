const express = require('express');
const zod = require('zod');
const app = express();
app.use(express.json());

const schema = zod.object({             // checks if input is an object that contains email, password and country
    email: zod.string().email(),
    password: zod.string().min(10).max(100),
    country: zod.literal("US").or(zod.literal("IN"))
})

app.post('/register', (req, res) => {
    const user = req.body;

    const response = schema.safeParse(user);

    if (!response.success) {
        res.json({
            error_msg: response.error.issues.map((issue) => issue.message)
        });
    }
    else {
        res.send({
            response
        })
    }
})

app.get("*", (req, res) => {
    res
        .status(404)
        .send("404 not found")
});

app.listen(3000, () => console.log("server is running ... "))