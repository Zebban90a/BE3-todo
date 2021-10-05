const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

/* GET home page. */
router
  .route("/")
  .get(todoController.getAllTodoLists)
  .post(todoController.addNewTodoList)

router
  .route("/todo/:listId")
  .post(todoController.addNewTodo)

router.route("/todolist/:listId")
  .get(todoController.getOneList)
  .delete(todoController.deleteOneList)

router
  .route("/todolist/:listId/todo/:todoId")
  .get(todoController.getOneListItem)
  .post(todoController.updateTodoItem)
  .delete(todoController.deleteTodo)



module.exports = router
