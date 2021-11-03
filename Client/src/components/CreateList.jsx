import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {createList} from "../fetches/fetches"
import styled from "styled-components"

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const StyledH1 = styled.h1`
color: white;
margin-top: 5rem;
margin-bottom: 1.7rem;
`
const StyledInput = styled.input`
background-color: #313164;
border: none;
border-bottom: 2px solid #0DB8DE;
border-top: 0px;
border-radius: 0px;
font-weight: bold;
outline: 0;
margin-bottom: 2.5rem;
padding-left: 0px;
color: white;
font-size: 1.5rem;
margin-left: 2.5rem;
`

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
`

export default function CreateList({ userId }) {
  const [titel, setTitel] = useState("")
  const history = useHistory()

  axios.defaults.withCredentials = true

  let submitHandler = async (e) => {
    const token = await window.localStorage.getItem("token")

    if (!token) {console.log("No token")}

    await createList(titel, {headers: { authToken: token }})
  }

  let changeHandler = (e) => {
    setTitel({ titel: e.target.value })
  }

  return (
    <>
    <StyledWrapper>
      <StyledH1>Skapa en ny todo lista</StyledH1>
      <div>
        <form onSubmit={submitHandler} action="">
          <StyledInput
            name="titel"
            type="text"
            placeholder="Titel"
            onChange={changeHandler}
            />
          <StyledButton type="submit">Skapa</StyledButton>
        </form>
      </div>
    </StyledWrapper>
    </>
  )
}

//TODO fetcha nya listan till servern
