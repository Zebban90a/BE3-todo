import React, { useState } from "react"

export default function PostForm() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  let changeHandler = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value)
    } else if (e.target.name == "text") {
      setText(e.target.value)
    }
  }

  let submitHandler = (e) => {
    e.preventDefault()
    console.log(`This is the title ${title}`)
    console.log(`This is the text ${text}`)
  }

  return (
    <>
      <h1>Skapa en ny todo lista</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            name="title"
            type="text"
            placeholder="titel"
            onChange={changeHandler}
          />
          <br />
          
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            placeholder="Skriv din todo"
            onChange={changeHandler}
          ></textarea>
          <br />
          <button type="submit">Spara</button>
        </form>
      </div>
    </>
  )
}
