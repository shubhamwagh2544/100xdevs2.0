import express, { Request, Response, NextFunction } from 'express'
import { createClient } from 'redis'

// create express app
const app = express()
// json body parser
app.use(express.json())

// create redis client
const client = createClient();
client.on('error', (err) => console.log('redis client error: ', err))

// submit endpoint
app.post('/submit', async (req, res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;
    try {
        // push submission to worker in redis
        client.lPush("submissions", JSON.stringify({ problemId, code, language }))

        // store in db
        // prisma.submissions.create({})

        return res.status(200).json({
            problemId,
            message: 'code submission succeeded'
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'code submission failed',
            error: err
        })
    }

})

// Global error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack trace

    res.status(500).json({
        status: 'error',
        message: err.message,
    });

    next()
});

async function startServer() {
    try {
        // connect redis client
        await client.connect()
        console.log('redis client connected')

        // start http server
        app.listen(3000, () => console.log('http server started at 3000'))
    }
    catch (err) {
        console.log('failed to connect to redis: ', err)
    }
}

startServer()