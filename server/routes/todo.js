const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")
const auth = require("../middleware/auth")

router
  .route("/")
  .get(todoController.getAllTodoLists)
  .post(todoController.addNewTodoList)

// router
//   .route("/:userId")
//   .get(todoController.getAllTodoLists)
//   .post(todoController.addNewTodoList)

router
  .route("/:listId")
  //.get(todoController.getOneList)
  .post(todoController.addNewTodo)
  .delete(todoController.deleteOneList)

router
  .route("/:todoId")
  .delete(todoController.deleteTodo)
  .patch(todoController.updateTodoItem)

module.exports = router
