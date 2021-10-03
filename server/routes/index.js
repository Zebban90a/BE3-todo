const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


/* GET home page. */
router
  .route('/')
  .get(todoController.getAllTodoLists)
  .post(todoController.addNewTodoList)

  router
  .route('/todolist/:id')
  .get(todoController.getOneList)
  .post(todoController.addNewTodo)

  router
  .route('/todolist/todo/:id')
  .get(todoController.getOneListItem)
  .post()



module.exports = router;
