const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewTodoListSchema = new Schema({
  titel: { type: String },
  todos: { type: Array, default: [] },
})

module.exports = mongoose.model("todoLists", NewTodoListSchema)
