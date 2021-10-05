const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewTodoListSchema = new Schema({
  titel: { type: String, default: "guitarist" },
  todos:[{ type: Schema.Types.ObjectId, ref: 'todoItem' }]
})

module.exports = mongoose.model("todoLists", NewTodoListSchema)
