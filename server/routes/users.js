const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
var cors = require('cors')



router.route("/register").post(userController.registerUser)
router.route("/login").get().post(userController.userLogin)
router.route("/logout").get(userController.userLogout)

module.exports = router
