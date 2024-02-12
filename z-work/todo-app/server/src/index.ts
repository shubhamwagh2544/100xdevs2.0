import express from 'express'
import cors from 'cors'
import { createTodo } from './db/CreateTodo'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


app.post('/', async (req, res) => {
    // take data from frontend
    const { todo } = req.body

    // save todo in db
    const response = await createTodo(todo)

    return res.status(200).json({
        res: 'success',
        todo: response
    })
})

app.listen(port, () => console.log(`server started on port ${port}`))