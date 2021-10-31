const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
var cors = require('cors')



router.route("/register").post(userController.registerUser)
router.options('/login', cors())
router.route("/login", cors()).get().post(userController.userLogin)
router.route("/logout").get(userController.userLogout)

module.exports = router
