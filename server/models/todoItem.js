const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewTodoItemSchema = new Schema({ body: String }, { timestamps: true })

module.exports = mongoose.model("todoItem", NewTodoItemSchema)

