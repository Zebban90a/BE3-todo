const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


/* GET home page. */
router
  .route('/')
  .get(todoController.getAllTodoLists)
  .post()

  router
  .route('/todo/:id')
  .get(todoController.getOneList)
  .post()

module.exports = router;
