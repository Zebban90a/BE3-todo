const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

router.route("/register").post(userController.registerUser)
router.route("/login").get().post(userController.userLogin)
router.route("/logout").get(userController.userLogout)

module.exports = router
