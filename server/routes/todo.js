const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")
const auth = require("../middleware/auth")

router
  .route("/")
  .get(auth, todoController.getAllTodoLists)
  .post(auth, todoController.addNewTodoList)

router
  .route("/:listId")
  .get(todoController.getOneList)
  .post(todoController.addNewTodo)
  .delete(todoController.deleteOneList)

router
  .route("/single/:todoId")
  .delete(todoController.deleteTodo)
  .patch(todoController.updateTodoItem)

module.exports = router
