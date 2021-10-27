import React from "react"
import styled from "styled-components"
import axios from "axios"

const StyledButton = styled.button`
  border: none;
  float: right;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 15px;
`

export const Header = () => {
  const handleSignOut = async () => {
    await axios.get("http://localhost:4000/users/logout")
  }

  return (
    <div>
      <StyledButton onClick={handleSignOut}>Sign out</StyledButton>
    </div>
  )
}
