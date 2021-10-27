function auth(req, res, next) {
  try {
    console.log("auth function")
    console.log(req.cookies)
  } catch (error) {
    console.log(error)
    res.status(401).json({ errorMessage: "Unauthorized" })
  }
}

module.exports = auth
