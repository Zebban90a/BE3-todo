import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginFetch } from "../fetches/fetches"

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState({})
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await loginFetch(loginValue)

    const token = await res.data.token

    if (token) {
      localStorage.setItem("token", token)
    }

    history.push("/todolists")
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
