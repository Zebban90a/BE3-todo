const userModel = require("../models/user")
const passport = require("passport")

exports.userLogin = (req, res, next) => {
  console.log("dyssman")
  /*passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true }) */
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      console.log("Fel lösen lr användare")
      return res.status(404).redirect("http://localhost:3000/login")
    } else {
      console.log("Inloggad")
      return res.redirect("http://localhost:3000/" + user._id)
    }
  })(req, res, next)
}

exports.registerUser = (req, res) => {
  userModel.register(
    userModel({
      username: req.body.username,
    }),
    req.body.password,
    function (err, user) {
      //om error
      if (err) {
        console.log(err)
        res.send("register")
      }
      //annars
      passport.authenticate("local")(req, res, function () {
        res.redirect("http://localhost:3000/login")
      })
    }
  )
}

exports.getLoginpage = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not defined",
  })
}
