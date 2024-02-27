import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/testdocker')

const testSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
})

export const TestModel = mongoose.model('TestModel', testSchema)

module.exports = {
    TestModel
}