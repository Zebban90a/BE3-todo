import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {createList} from "../fetches/fetches"

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
