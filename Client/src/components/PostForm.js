import React, { useState } from "react"
import axios from "axios"

export default function PostForm() {
  const [titel, setTitel] = useState("")
  // const [text, setText] = useState("")

  let changeHandler = (e) => {
    if (e.target.name === "titel") {
      setTitel({ titel: e.target.value })
    }
  }

  let submitHandler = (e) => {
    e.preventDefault()
    console.log(`This is the titel ${titel.titel}`)
    axios.post("http://localhost:4000/", titel)
  }

  return (
    <>
      <h1>Skapa en ny todo lista</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            name="titel"
            type="text"
            placeholder="titel"
            onChange={changeHandler}
          />
          <br />
          {/* <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            placeholder="Skriv din todo"
            onChange={changeHandler}
          ></textarea> */}
          <br />
          <button type="submit">Spara</button>
        </form>
      </div>
    </>
  )
}
