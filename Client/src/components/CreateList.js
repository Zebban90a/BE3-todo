import React, {useState} from 'react'

export default function CreateList() {
    const [title, setTitle] = useState("")

    let submitHandler = (e) => {
        e.preventDefault()
        console.log(`This is the title ${title}`)
      }

      let changeHandler = (e) => {
          setTitle(e.target.value)
        
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
           <button type="submit">Spara</button>
        </form>
      </div>
      </>
    )
}
