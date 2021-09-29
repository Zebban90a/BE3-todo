const NewTodoListSchema = require('../models/todoLists')

exports.getAllTodoLists = async (req, res) => {

    const schema = await NewTodoListSchema.find({});
    console.log(schema)
    res.status(200).json(schema);
    
  };


