const todoListModel = require('../models/todoLists')
const todoModel = require('../models/todoItem')


exports.getAllTodoLists = async (req, res) => {

    const schema = await todoListModel.find({});
    res.status(200).json(schema);
    
  };

  exports.getOneList = async (req, res) => {

    const todoId = req.params.id
    console.log(todoId)
    const schema = await todoListModel.findById(todoId);
    if (!schema) {
      res.statusCode=404;
      res.statusMessage='Not found'
      res.end('Not found');
    } else {
    res.status(200).json(schema);
    }
  };

  exports.getOneListItem = async (req, res) => {
    const itemId = req.params.id

    const schema = await todoListModel.findById(itemId);
    if (!schema) {
      res.statusCode=404;
      res.statusMessage='Not found'
      res.end('Not found');
    } else {
    res.status(200).json(schema);
    }
  }

  exports.addNewTodo = (req, res) => {
    const listId = req.params.id
    const todoObj = { titel: req.body.title, body: req.body.text }
    todoListModel.findOneAndUpdate({_id: listId}, 
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


