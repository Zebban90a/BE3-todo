import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"

const StyledButton = styled.button`
border: none;
padding:3px 20px;
border-radius: 5px;
background-color: inherit;
border: solid 2px #9aea9e;
color: white;
font-size: 1.1rem;
cursor: pointer;
margin-left: 10px;
float: right;
`

export const Header = () => {
  const history = useHistory()
  axios.defaults.withCredentials = true

  const handleSignOut = async () => {
    localStorage.clear()
    history.push("/")
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
