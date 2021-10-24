// const mongoose = require('mongoose');
const TodoListModel = require('../models/todoLists');
const TodoModel = require('../models/todoItem');
// const userModel = require('../models/user');
// const middlewareLoggedin = require('../middleware/isLoggedIn')

/// ///////////////////// GET REQUESTS ////////////////////////

exports.getAllTodoLists = async (req, res) => {
  const { userId } = req.params;

  const schema = await TodoListModel.find({ user: userId });
  res.status(200).json(schema);
};

exports.getOneList = async (req, res) => {
  const { listId } = req.params;
  const schema = await TodoListModel.findById(listId).populate('todos');
  if (!schema) {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end('Not found');
  } else {
    res.status(200).json(schema);
  }
};

exports.getOneListItem = async (req, res) => {
  const { todoId } = req.params;

  const schema = await TodoModel.findById(todoId);
  if (!schema) {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end('Not found');
  } else {
    res.status(200).json(schema);
    console.log(schema);
  }
};

/// ///////////////////// POST REQUESTS ////////////////////////
exports.addNewTodo = (req, res) => {
  const { listId } = req.params;
  const todoObj = { body: req.body.text };
  const newTodo = new TodoModel(todoObj);
  newTodo.save();

  TodoListModel.findOneAndUpdate(
    { _id: listId },
    { $push: { todos: newTodo } },
    { new: true },
    (error) => {
      if (error) {
        console.log('error updating collection');
      }
    },
  );
  res.status(200);
};

exports.addNewTodoList = async (req, res) => {
  const { userId } = req.params;

  // const name = {titel: req.body.titel, user: user }

  const listName = await new TodoListModel({
    titel: req.body.titel,
    user: userId,
  });
  if (!listName) {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end('Not found');
  } else {
    console.log(listName);
    res.status(200).json(listName);
    console.log(userId);
    listName.save();
  }
};

exports.updateTodoItem = async (req) => {
  const { todoId } = req.params;

  const todoObj = {
    body: req.body.text,
  };
  const updateTodo = await TodoModel.findById(todoId);
  updateTodo.set(todoObj);

  await updateTodo.save();
  console.log(updateTodo);
};

/// ///////////////////// DELETE REQUEST ////////////////////////

exports.deleteTodo = (req) => {
  const { todoId } = req.params;

  TodoModel.findByIdAndDelete(todoId, (err) => {
    if (err) console.log(err);
    console.log('Successful deletion');
  });
};

exports.deleteOneList = async (req) => {
  const { listId } = req.params;
  console.log(listId);
  await TodoListModel.findByIdAndDelete(listId);
};
