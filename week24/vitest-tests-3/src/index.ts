import express from 'express'
import { z } from 'zod'
import { prisma } from './prisma'
export const app = express()
app.use(express.json())

const inputSchema = z.object({
    a: z.number(),
    b: z.number()
})

// more strict endpoint => zod input sanitization
app.post('/sum', async (req, res) => {
    const parsedInput = inputSchema.safeParse(req.body)
    if (!parsedInput.success) {
        return res.status(411).json({
            message: 'invalid inputs'
        })
    }

    const answer = parsedInput.data.a + parsedInput.data.b;

    // save to db
    const newSum = await prisma.sum.create({
        data: {
            a: parsedInput.data.a,
            b: parsedInput.data.b,
            answer
        }
    })

    return res.status(200).json({
        answer
    })
})

app.get('/sum', (req, res) => {
    const parsedInput = inputSchema.safeParse({
        a: Number(req.headers.a),
        b: Number(req.headers.b)
    })
    if (!parsedInput.success) {
        return res.status(411).json({
            message: 'invalid inputs'
        })
    }

    const answer = parsedInput.data.a + parsedInput.data.b;
    return res.status(200).json({
        answer
    })
})