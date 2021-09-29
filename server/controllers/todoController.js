const NewTodoListSchema = require('../models/todoLists')

exports.getAllTodoLists = async (req, res) => {

    const schema = await NewTodoListSchema.find({});
    res.status(200).json(schema);
    
  };

  exports.getOneList = async (req, res) => {

    const todoId = req.params.id
    console.log(todoId)
    const schema = await NewTodoListSchema.findById(todoId);
    if (!schema) {
      res.statusCode=500;
      res.statusMessage='Not found'
      res.end('Not found');
    } else {
    res.status(200).json(schema);
    }
  };


