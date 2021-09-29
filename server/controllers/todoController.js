
const NewTodoListSchema = require('../models/todoLists')

const todolists = NewTodoListSchema

exports.getAllTodoLists = (req, res) => {
    res.status(200).json({
      status: 'success',
      results: todolists.length,
      data: {
        data,
      },
    });
  };