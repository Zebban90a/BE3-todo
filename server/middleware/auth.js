const jwt = require("jsonwebtoken")

async function auth(req, res, next) {
  try {
    const { token } = req.cookies
    if (!token) {
      return (
        res
          // .status(401)
          // .json({ errorMessage: "Unauthorized" })
          .redirect("http://localhost:3000/login")
      )
    } else {
      const verified = jwt.verify(token, process.env.JWT_SECRET_USER)

      req.user = verified.user

      return next()
    }
  } catch (err) {
    console.log(err)
    return res.status(401).json({ errorMessage: "Unauthorized" })
  }
}

module.exports = auth
