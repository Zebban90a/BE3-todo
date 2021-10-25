const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewTodoListSchema = new Schema({
  titel: { type: String, default: "guitarist" },
  todos: [{ type: Schema.Types.ObjectId, ref: "todoItem" }],
  user: { type: Schema.Types.ObjectId, ref: "userInfo" },
})

module.exports = mongoose.model("todoLists", NewTodoListSchema)
