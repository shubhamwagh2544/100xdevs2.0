const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: 'user sent wrong inputs'
        })
    }

    // put in mongo db
    const response = await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    if (response) {
        res.status(201).json({
            msg: 'todo created'
        })
    }
    else {
        res.status(411).json({
            msg: 'something went wrong'
        })
    }
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    if (todos) {
        res.status(200).json({
            todos
        })
    }
    else {
        res.status(411).json({
            msg: 'something went wrong'
        })
    }
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: 'user sent wrong inputs'
        })
    }

    // update in db
    const response = await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    if (response) {
        res.status(200).json({
            msg: 'todo marked completed'
        })
    }
    else {
        res.status(411).json({
            msg: 'something went wrong'
        })
    }
})


app.listen(PORT, () => console.log(`server started on port ${PORT}`));