const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewTodoItemSchema = new Schema ({
    titel: {type: String,
    default: 'kalle'},
    body: {type: String},
    createdAt: {
        type: Date,
        default: new Date()
    },
    todolist: {type: Schema.Types.ObjectId, ref: 'todoLists'},
})

module.exports = mongoose.model('todoItem', NewTodoItemSchema);