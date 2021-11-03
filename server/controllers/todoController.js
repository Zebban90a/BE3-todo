const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")
const checkUser = require("../utils/checkUser")


exports.getAllTodoLists = async (req, res) => {
  try {
    const userId = req.user
    const schema = await todoListModel.find({ user: userId })
    res.status(200).json(schema)
  } catch (error) {
    console.error("error")
  }
}

exports.getOneList = async (req, res) => {
  const listId = req.params.listId
  const schema = await todoListModel.findById(listId).populate("todos")
  if (!schema) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200).json(schema)
  }
}

exports.addNewTodo = (req, res) => {
  try {
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
          console.error("error updating collection")
        }
      }
    )
    res.status(200)
  } catch (error) {
  }
}

exports.addNewTodoList = async (req, res) => {
  const userId = req.user

  const listName = await new todoListModel({
    titel: req.body.titel,
    user: userId,
  })
  if (!listName) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200)
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
}


exports.deleteTodo = (req, res) => {
  const todoId = req.params.todoId

  todoModel.findByIdAndDelete(todoId, (err) => {
    if (err) console.error(err)
  })
}

exports.deleteOneList = async (req, res) => {
  const listId = req.params.listId
  await todoListModel.findByIdAndDelete(listId)
}
