const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
require("dotenv").config()


const app = express()

app.use(cors({
    origin: ['https://be3-client.herokuapp.com'],
    credentials: true,
}))

const todoRouter = require("./routes/todo")
const usersRouter = require("./routes/users")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/todo/", todoRouter)
app.use("/users", usersRouter)

module.exports = app

