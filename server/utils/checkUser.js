const jwt = require("jsonwebtoken")

const checkUser = (token) => {
  if (token) {
    const decodedUser = jwt.decode(token)
    id = decodedUser.user
    return id
  } else {
    console.error("error")
    return null
  }
}

module.exports = checkUser
