const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")
const connectEnsureLogin = require('connect-ensure-login');


//////////////////////// GET REQUESTS ////////////////////////


exports.getAllTodoLists = async (req, res, ) => {
  
  //const userId = req.params.userId

  const schema = await todoListModel.find()
  res.status(200).json(schema)
}

exports.getOneList =  async (req, res) => {

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

exports.getOneListItem =  async (req, res) => {
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

exports.addNewTodoList = async (req, res) => {
  const userId = req.params.userId
  
  
  //const name = {titel: req.body.titel, user: user }
 
  const listName = await new todoListModel({titel: req.body.titel, user: userId} )
  if (!listName) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    console.log(listName)
    res.status(200).json(listName)
    console.log(userId) 
    listName.save()
  }
}

exports.updateTodoItem = async (req, res) => {
  const todoId = req.params.todoId

  const todoObj = {
    body: req.body.text,
  }
  const updateTodo = await todoModel.findById(todoId)
  updateTodo.set(todoObj)

  await updateTodo.save()
  console.log(updateTodo)
}

//////////////////////// DELETE REQUEST ////////////////////////

exports.deleteTodo = (req, res) => {
  const todoId = req.params.todoId
  console.log(todoId)

  todoModel.findByIdAndDelete(todoId, (err) => {
    if (err) console.log(err)
    console.log("Successful deletion")
  })
}

exports.deleteOneList = async (req, res) => {
  const listId = req.params.listId
  console.log(listId)
  await todoListModel.findByIdAndDelete(listId)
}

