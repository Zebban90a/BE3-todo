import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  float: right;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 15px;
`

export const Header = () => {
  const history = useHistory()
  axios.defaults.withCredentials = true

  const handleSignOut = async () => {
    localStorage.clear()
    history.push("/login")
    window.location.reload()
  }

  return (
    <div>
      <StyledButton onClick={handleSignOut}>Sign out</StyledButton>
      <Link to="/login">
        <StyledButton>Sign in</StyledButton>
      </Link>
      <Link to="/register">
        <StyledButton>Register</StyledButton>
      </Link>
    </div>
  )
}
