import React, { useState } from "react"
import axios from "axios"

export default function CreateList() {
  const [titel, setTitel] = useState("")

  let submitHandler = (e) => {
    
    console.log(`This is the titel ${titel.titel}`)
    axios.post("http://localhost:4000/", titel)
  }

  let changeHandler = (e) => {
    setTitel({ titel: e.target.value })
  }

  return (
    <>
      <h1>Skapa en ny todo lista</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            name="titel"
            type="text"
            placeholder="Titel"
            onChange={changeHandler}
          />
          <button type="submit">Spara</button>
        </form>
      </div>
    </>
  )
}

//TODO fetcha nya listan till servern
