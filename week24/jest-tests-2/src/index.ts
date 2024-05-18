import express from 'express'

export const app = express()

app.use(express.json())

app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    const answer = Number(a) + Number(b)

    return res.status(200).json({
        sum: answer
    })
})