const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')
const loggedInMiddleWare = require("../middleware/isLoggedIn")


  router
  .route("/register")
  .post(userController.registerUser)
  router
  .route("/login")
  .get()
  .post(userController.userLogin)

module.exports = router;
