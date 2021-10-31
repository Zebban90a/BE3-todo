const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
require("dotenv").config()

const todoRouter = require("./routes/todo")
const usersRouter = require("./routes/users")

const app = express()

/* app.use(
  cors({
    origin: 'https://be3-client.herokuapp.com'
  })
) */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://be3-client.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/todo/", todoRouter)
app.use("/users", usersRouter)

module.exports = app

//NOTE kolla så registering fungerar med nya local storgae token. Tror inte jag ändrat på den en
