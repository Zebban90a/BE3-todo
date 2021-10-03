import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import CreateTodo from "../components/CreateTodo"

export default function ListPage() {
  const [list, setList] = useState([])
  const [todos, setTodos] = useState([])
  const { id } = useParams()

  async function FetchList() {
    const { data } = await axios.get(`http://localhost:4000/todolist/${id}`)
    setList(data)
    setTodos(data.todos)
  }

  useEffect(() => {
    FetchList()

  }, [])

  

  return (
    <>
      <div>{!list ? "List not found" : list.titel}</div>
      

      { <ul>
        {!todos ? "todos not found"
          : 
          todos.map((item, index) => (
              <li key= {index}>
                {item.titel} {item.createdAt} <button>DELETE</button>
                <button>UPDATE</button>
              </li>
            ))}
      </ul> }
      <CreateTodo />
    </>
  )
}

//TODO när fetchningen fungerar igen så fixa post req i CreateTodo.js
