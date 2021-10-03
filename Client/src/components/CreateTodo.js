import React, { useState } from "react"
import axios from "axios"
import {  useParams } from "react-router-dom"

export default function PostForm() {
  const [text, setText] = useState("")
  const { id } = useParams()

 
  let submitHandler = (e) => {
    axios.post(`http://localhost:4000/todolist/${id}`, text)
    console.log(`This is the text ${text}`)
  }

  let changeHandler = (e) => {
    setText({ text: e.target.value})
  }

  return (
    <>
      <h1>Lägg till en todo</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            name="text"
            type="text"
            placeholder="Ny todo"
            onChange={changeHandler}
          />
          <br />
          <button type="submit">Spara</button>
        </form>
      </div>
    </>
  )
}

//TODO fetcha todon till servern
