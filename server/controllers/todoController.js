const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")
const mongoose = require('mongoose')

//////////////////////// GET REQUESTS ////////////////////////
exports.getAllTodoLists = async (req, res) => {
  const schema = await todoListModel.find({})
  res.status(200).json(schema)
}

exports.getOneList = async (req, res) => {
  const todoId = req.params.id
  console.log(todoId)
  const schema = await todoListModel.findById(todoId)
  if (!schema) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200).json(schema)
  }
}

exports.getOneListItem = async (req, res) => {
  const listId = req.params.listId;
  const todoId = req.params.todoId;
q
                  
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
exports.addNewTodo =  (req, res) => {
  const listId = req.params.id;
  const todoObj = { body: req.body.text }
  const newTodo = new todoModel(todoObj)
  
  if (!newTodo) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
  } else {
    res.status(200).json(newTodo)
    console.log(newTodo)
    newTodo.save()

    todoListModel.findOneAndUpdate(
      { _id: listId },
      { $push: { todos : newTodo } },
      { new: true },
      (error, data) => {
        if (error) {
          console.log("error updating collection")
        }
      }
    )
  }
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

exports.updateTodoItem = (req,res) => {
  const listId = req.params.id
  const todoObj = { body: req.body.text }
  todoListModel.findOneAndUpdate(
    { _id: listId },
    { $push: { todos: new todoModel(todoObj) } },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error updating collection")
      }
    }
  )
}

/*exports.postItem = async (req, res) => {
    const todo = new NewTodoItemSchema ({
      titel: 'Kaffe3', 
      body: 'Måste köpa kaffe imorgon',
    })
    
    todo
    .save()
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.log('ERROR:', err);
      });
  } */

/*exports.getListItems = async (req, res) => {
    const listId = req.params.id

    const schema = await NewTodoItemSchema.find({listId});
    res.status(200).json(schema);
  } */
