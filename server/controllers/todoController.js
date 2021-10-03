const todoListModel = require("../models/todoLists")
const todoModel = require("../models/todoItem")

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
  const id = req.params.id
  
  const schema = await todoListModel.findById(
    id
  )
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

exports.addNewTodoList = (req, res) => {
  const name = req.body
  console.log(req.body)
  console.log(`Det här är namnet ${name.titel}`)
  const listName = new todoListModel(name)
  if (!listName) {
    res.statusCode = 404
    res.statusMessage = "Not found"
    res.end("Not found")
    console.log("ERROR")
  } else {
    console.log("SUCSESS")
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
