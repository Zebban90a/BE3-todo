import ReactDOM from "react-dom"
import React, { useState } from "react"
import "../scss/modal.scss"
import {updateTodo} from "../fetches/fetches"


const Modal = ({ show, close, title, data, id }) => {
  const [todo, setTodo] = useState()

  let submitHandler = async () => {
    updateTodo(id, todo)
    close()
    window.location.reload()
  }

  let changeHandler = (e) => {
    setTodo({ text: e.target.value })
  }


  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
            </header>
            <main className="modal_content">
              <textarea
                defaultValue={data}
                rows="4"
                cols="50"
                name="text"
                type="text"
                onChange={changeHandler}
              />
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button onClick={submitHandler} className="submit">
                Submit
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  )
}

export default Modal
