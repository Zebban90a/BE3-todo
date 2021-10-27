import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import CreateTodo from "../components/CreateTodo"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Modal from "../components/Modal"

import { Header } from "../components/Header"

const StyledCard = styled.div`
  border: 1px solid black;
  min-height: 200px;
  border-radius: 15px;
  text-align: center;
  background-color: #e9c39d;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.58);
`
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 5px;
`
//box-shadow: 13px 11px 34px 2px #000000;
export default function ListPage() {
  axios.defaults.withCredentials = true

  const [list, setTodoList] = useState([])
  const { listId } = useParams()
  const [modal, setModal] = useState(false)
  const Toggle = (modalText, todoId) => {
    setmodalTodoId(todoId)
    setModalText(modalText)
    setModal(!modal)
  }
  const [modalTodoId, setmodalTodoId] = useState("")
  const [modalText, setModalText] = useState("")

  async function FetchList() {
    const { data } = await axios.get(`http://localhost:4000/api/todo/${listId}`)
    setTodoList(data)
  }

  useEffect(() => {
    FetchList()
  }, [])

  //////////////////////// Delete function ////////////////////////

  let deleteTodo = (todoId) => {
    axios.delete(`http://localhost:4000/api/todo/single/${todoId}`)
    window.location.reload()
  }

  return (
    <>
      <Header />

      <div>{!list ? "List not found" : list.titel}</div>
      <CreateTodo listId={listId} />
      <StyledWrapper>
        {!list.todos
          ? "todos not found"
          : list.todos.map((item) => (
              <StyledCard
                key={item._id}
                onClick={() => Toggle(item.body, item._id)}
              >
                <ReactMarkdown children={item.body} />
                <p>{item.updatedAt}</p>
                <button onClick={() => deleteTodo(item._id)}>DELETE</button>
              </StyledCard>
            ))}
        <Modal
          show={modal}
          data={modalText}
          id={modalTodoId}
          title="My Modal"
          close={Toggle}
        />
      </StyledWrapper>
    </>
  )
}

//TODO när fetchningen fungerar igen så fixa post req i CreateTodo.js
