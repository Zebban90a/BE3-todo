const jwt = require("jsonwebtoken")

function auth(req, res, next) {
  try {
    console.log("AUTH")
    const token = req.headers.authtoken
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" })

    const verified = jwt.verify(token, process.env.JWT_SECRET_USER)

    req.user = verified.user

    return next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ errorMessage: "Unauthorized" })
  }
}

module.exports = auth
