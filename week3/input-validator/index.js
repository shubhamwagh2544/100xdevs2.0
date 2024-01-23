const express = require('express');
const zod = require('zod');
const app = express();
app.use(express.json());

const schema = zod.array(zod.number());     // checks if input is an array of numbers

app.get('/kidney-check', (req, res) => {
    const kidneys = req.body.kidneys;

    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(411).json({
            msg: "wrong input!"
        })
    }
    else {
        res.send({
            response
        })
    }
})

app.listen(3000, () => console.log("server is running ... "))