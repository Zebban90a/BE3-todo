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

/*  app.use(
  cors({
    origin: 'https://be3-client.herokuapp.com'
  })
)  */

var corsOptions = {
  origin: 'https://be3-client.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.options('*', cors())
app.use("/api/todo/", cors(corsOptions), todoRouter)
app.options('*', cors())
app.use("/users", cors(corsOptions), usersRouter)

module.exports = app

//NOTE kolla så registering fungerar med nya local storgae token. Tror inte jag ändrat på den en
