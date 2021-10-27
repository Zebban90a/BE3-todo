const jwt = require("jsonwebtoken")
//const userModel = require("../models/user")

const checkUser = (token) => {
  console.log("Check user function")
  console.log(token)
  if (token) {
    const decodedUser = jwt.decode(token)
    id = decodedUser.user
    return id
  } else {
    console.log("fel!")
    return null
  }
}

module.exports = checkUser
