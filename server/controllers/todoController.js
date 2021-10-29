const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")
const checkUser = require("../utils/checkUser")

//////////////////////// GET REQUESTS ////////////////////////

exports.getAllTodoLists = async (req, res) => {
  try {
    const userId = req.user
    const schema = await todoListModel.find({ user: userId })
    res.status(200).json(schema)
  } catch (error) {
    console.log("error")
  }
}

exports.getOneList = async (req, res) => {
  //console.log("Inne i getOneList")
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

//////////////////////// POST REQUESTS ////////////////////////
exports.addNewTodo = (req, res) => {
  //console.log("IDIDIDI")
  try {
    //console.log(req.user + "ID")
    const listId = req.params.listId
    const todoObj = { body: req.body.text }
    console.log("Inne i add todo")
    console.log(todoObj)

    const newTodo = new todoModel(todoObj)
    newTodo.save()
    console.log(newTodo)

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
  } catch (error) {
    console.log("Todon sparades inte")
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
  console.log(`DELETE ITEM LISTID${listId}`)
  await todoListModel.findByIdAndDelete(listId)
}
