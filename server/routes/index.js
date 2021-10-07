const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")
const connectEnsureLogin = require('connect-ensure-login');



/* GET home page. */


/*function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()){
    console.log('lol')
      return next();
      
  }
  console.log('lol från redirect')
  res.redirect("/login");
} */


router
  .route("/:userId")
  .get(todoController.getAllTodoLists)
  .post(todoController.addNewTodoList)


router
  .route("/todo/:listId")
  .post(todoController.addNewTodo)

router.route("/todolist/:listId")
  .get(connectEnsureLogin.ensureLoggedIn, todoController.getOneList)
  .delete(todoController.deleteOneList)

router
  .route("/todolist/:listId/todo/:todoId")
  .get(todoController.getOneListItem)
  .post(todoController.updateTodoItem)
  .delete(todoController.deleteTodo)

  

module.exports = router
