import React, { useState } from "react"

export default function PostForm() {
  const [text, setText] = useState("")

  let changeHandler = (e) => {
    setText(e.target.value)
  }

  let submitHandler = (e) => {
    e.preventDefault()
    console.log(`This is the text ${text}`)
  }

  return (
    <>
      <h1>Lägg till en todo</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            name="title"
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
