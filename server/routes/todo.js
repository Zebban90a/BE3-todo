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
  .route("/")
  .get(todoController.getAllTodoLists)
  .post(todoController.addNewTodoList)


router
  .route("/:listId")
  .get(todoController.getOneList)
  .post(todoController.addNewTodo)
  .delete(todoController.deleteOneList)

router.route("/:todoId")
  .delete(todoController.deleteTodo)
  .patch(todoController.updateTodoItem)

module.exports = router
