const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")
const auth = require("../middleware/auth")

router
  .route("/")
  .get(todoController.getAllTodoLists)
  .post(auth, todoController.addNewTodoList)

router
  .route("/:listId")
  .get(auth, todoController.getOneList)
  .post(auth, todoController.addNewTodo)
  .delete(auth, todoController.deleteOneList)

router
  .route("/single/:todoId")
  .delete(auth, todoController.deleteTodo)
  .patch(auth, todoController.updateTodoItem)

module.exports = router
