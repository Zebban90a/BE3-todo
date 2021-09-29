const NewTodoListSchema = require('../models/todoLists')

exports.getAllTodoLists = async (req, res) => {

    const schema = await NewTodoListSchema.find({});
    res.status(200).json(schema);
    
  };

  exports.getOneList = async (req, res) => {

    const todoId = parseInt(req.params.id)
    const schema = await NewTodoListSchema.findById(todoId);
    res.status(200).json(schema);
    
  };


