const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")
const mongoose = require('mongoose')
const { update } = require("../models/todoLists")

//////////////////////// GET REQUESTS ////////////////////////
exports.getAllTodoLists = async (req, res) => {
  const schema = await todoListModel.find({})
  res.status(200).json(schema)
}

exports.getOneList = async (req, res) => {
  const listId = req.params.listId
  console.log(listId)
  const schema = await todoListModel.findById(listId).populate("todos")
  if (!schema) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200).json(schema)
  }
}

exports.getOneListItem = async (req, res) => {
  const todoId = req.params.todoId

  const schema = await todoModel.findById(todoId)
  if (!schema) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200).json(schema)
    console.log(schema)
  }
}

//////////////////////// POST REQUESTS ////////////////////////
exports.addNewTodo = (req, res) => {
  const listId = req.params.listId
  const todoObj = { body: req.body.text }
  const newTodo = new todoModel(todoObj)
  newTodo.save()

  todoListModel.findOneAndUpdate(
    { _id: listId },
    { $push: { todos: newTodo } },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error updating collection")
      }
    }
  )
  res.status(200)
}

exports.addNewTodoList = (req, res) => {
  const name = req.body
  console.log(req.body)
  console.log(`Det här är namnet ${name.titel}`)
  const listName = new todoListModel(name)
  if (!listName) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    console.log(listName)
    res.status(200).json(listName)
    listName.save()
  }
}

exports.updateTodoItem = async (req,res) => {
  const todoId = req.params.todoId
  const todoObj = { body: req.body.text }
  const updateTodo = await todoModel.findById(todoId)
  updateTodo.set(todoObj)
  await updateTodo.save()
  console.log(updateTodo)
};
