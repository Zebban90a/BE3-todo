const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewTodoItemSchema = new Schema({ body: String }, { timestamps: true });

module.exports = mongoose.model('todoItem', NewTodoItemSchema);

// TODO Skala av datum så endast dag år månad visas
