const userModel = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.userLogin = async (req, res, next) => {
  // console.log("dyssman")
  // /*passport.authenticate('local', { successRedirect: '/',
  //                                  failureRedirect: '/login',
  //                                  failureFlash: true }) */
  // passport.authenticate("local", (err, user, info) => {
  //   if (err) {
  //     return next(err)
  //   }

  //   if (!user) {
  //     console.log("Fel lösen lr användare")
  //     return res.status(404).redirect("http://localhost:3000/login")
  //   } else {
  //     console.log("Inloggad")
  //     return res.redirect("http://localhost:3000/" + user._id)
  //   }
  // })(req, res, next)

  ////////////////////////  ////////////////////////

  try {
    const { username, password } = req.body

    // Validations
    if (!username || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please fill in all required fields" })
    }

    const existingUser = await userModel.findOne({ username })

    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Wrong email or password." })
    }

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    )

    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Wrong email or password." })
    }

    // send the token in a HTTP only cookie

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET_USER
    )

    return res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send(existingUser)
  } catch (err) {
    console.error(err)
    return res.status(500).send()
  }
}

exports.registerUser = async (req, res) => {
  // userModel.register(
  //   userModel({
  //     username: req.body.username,
  //   }),
  //   req.body.password,
  //   function (err, user) {
  //     //om error
  //     if (err) {
  //       console.log(err)
  //       res.send("register")
  //     }
  //     //annars
  //     passport.authenticate("local")(req, res, function () {
  //       res.redirect("http://localhost:3000/login")
  //     })
  //   }
  // )
  ////////////////////////  ////////////////////////
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please fill in all required fields" })
    }

    const existingUser = await userModel.findOne({ username })
    if (existingUser) {
      return res.status(400).json({
        errorMessage: "This email already exists",
      })
    }

    // Hash the password
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = await new userModel({
      username,
      password: passwordHash,
    })

    // save user to db

    const savedUser = await newUser.save()

    // sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET_USER
    )

    console.log(token)

    return res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send()
  } catch (error) {
    console.error("Register:", err)
    return res.status(500).send()
  }
}

exports.getLoginpage = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not defined",
  })
}
