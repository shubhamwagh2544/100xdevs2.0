const mongoose = require('mongoose');

// connect db
mongoose.connect("mongodb+srv://shubhamwagh2544:tv4WAk8LE7DiRBYF@cluster0.dwuqqia.mongodb.net/todos");

// create schema
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

// create model
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}