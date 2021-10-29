import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export default function PostForm({ listId, todoBody }) {
  axios.defaults.withCredentials = true
  const [text, setText] = useState("")
  const textfield = useRef()
  const history = useHistory()

  //if(textfield.value  === '' ? console.log('tom sträng') : console.log('ej tom sträng'));
  let submitHandler = async (e) => {
    //e.preventDefault()
    await axios.post(`http://localhost:4000/api/todo/${listId}`, text)
    console.log(`This is the text ${text}`)

    // history.push(`http://localhost:3000//${listId}`)
  }

  let changeHandler = (e) => {
    setText({ text: e.target.value })
    todoBody = e.target.value
  }

  return (
    <>
      <StyledWrapper>
        <h1>Lägg till en todo</h1>
        <div>
          <form onSubmit={submitHandler} action="">
            <textarea
              rows="4"
              cols="50"
              ref={textfield}
              name="text"
              type="text"
              placeholder="Ny todo"
              onChange={changeHandler}
            />
            <br />
            <button type="submit">Spara</button>
          </form>
        </div>
      </StyledWrapper>
    </>
  )
}

//TODO fetcha todon till servern
