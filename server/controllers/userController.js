const userModel = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.userLogin = async (req, res, next) => {
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
      .redirect("http://localhost:3000/")
  } catch (err) {
    console.error(err)
    return res.status(500).send()
  }
}

exports.registerUser = async (req, res) => {
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

exports.userLogout = async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send()
}
