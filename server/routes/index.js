const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")
const LoggedInMiddleWare = require("../middleware/isLoggedIn")

/* GET home page. */
router
  .route("/:userId")
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
