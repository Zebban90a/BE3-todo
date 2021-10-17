import React, { useState, useRef } from "react"
import axios from "axios"

export default function PostForm({ listId, todoBody }) {
  const [text, setText] = useState("")
  const textfield = useRef()
  
  //if(textfield.value  === '' ? console.log('tom sträng') : console.log('ej tom sträng'));
  let submitHandler = async (e) => {
    await axios.post(`http://localhost:4000/api/todo/${listId}`, text)
    console.log(`This is the text ${text}`)
  }

  let changeHandler = (e) => {
    setText({ text: e.target.value })
    todoBody = e.target.value
  }

  return (
    <>
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
    </>
  )
}

//TODO fetcha todon till servern
