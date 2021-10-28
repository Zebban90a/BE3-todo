import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post(
      "http://localhost:4000/users/login",
      loginValue
    )
    const token = await res.data.token

    if (token) {
      localStorage.setItem("token", token)
    }
  }

  const handleOnChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleOnChange}>
        <input placeholder="username" name="username"></input>
        <input placeholder="password" name="password"></input>
        <button type="submit">Logga in</button>
      </form>
      <h2>Skapa konto!</h2>
      <Link to="/register">
        <button>Skapa konto</button>
      </Link>
    </>
  )
}
