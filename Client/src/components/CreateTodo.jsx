import React, { useState, useRef } from "react"
//import { useHistory } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import {createTodo} from "../fetches/fetches"

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const StyledH1 = styled.h1`
color: white;
margin-top: 2.5rem;
margin-bottom: 1.7rem;
`
const StyledTextArea = styled.textarea`
background-color: #313164;
border: none;
border-bottom: 2px solid #0DB8DE;
border-top: 0px;
border-radius: 5px;
font-weight: bold;
outline: 0;
margin-bottom: 1rem;
padding-left: 0px;
color: white;
font-size: 1.5rem;
margin-left: 2.5rem;
`
const StyledButton = styled.button`
border: none;
padding:6px 60px;
border-radius: 5px;
background-color: inherit;
border: solid 2px #9aea9e;
color: white;
font-size: 1.1rem;
cursor: pointer;
margin-left: 10px;
`

export default function PostForm({ listId, todoBody }) {
  axios.defaults.withCredentials = true
  const [text, setText] = useState("")
  const textfield = useRef()
  //const history = useHistory()


  let submitHandler = async (e) => {
    await createTodo(listId,text)
  }

  let changeHandler = (e) => {
    setText({ text: e.target.value })
    todoBody = e.target.value
  }

  return (
    <>
      <StyledWrapper>
        <StyledH1>Lägg till en todo</StyledH1>
        <div>
          <form onSubmit={submitHandler} action="">
            <StyledTextArea
              rows="4"
              cols="40"
              ref={textfield}
              name="text"
              type="text"
              placeholder="Ny todo"
              onChange={changeHandler}
            />
            <br />
            <StyledButton type="submit">Lägg till</StyledButton>
          </form>
        </div>
      </StyledWrapper>
    </>
  )
}

//TODO fetcha todon till servern
