const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewTodoListSchema = new Schema({
  titel: { type: string },
});

module.exports = mongoose.model("todoLists", NewTodoListSchema);
