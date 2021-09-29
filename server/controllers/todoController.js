const NewTodoListSchema = require('../models/todoLists')

exports.getAllTodoLists = (req, res) => {
    
    res.status(200).json();
    console.log(NewTodoListSchema)
  };


