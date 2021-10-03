const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewTodoItemSchema = new Schema ({
    body: {type: String},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todoItem', NewTodoItemSchema);