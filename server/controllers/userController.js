const userModel = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.userLogin = async (req, res, next) => {
  try {
    console.log(req.body)
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

    return res.status(200).json({ token, data: { existingUser } })
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
        errorMessage: "This user already exists",
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

    await newUser.save()

   
    return res
      .status(200).redirect("https://be3-client.herokuapp.com/")
  } catch (error) {
    console.error("Register:", error)
    return res.status(500).send()
  }
}

exports.userLogout = async (req, res) => {
  res.status(200)
}
