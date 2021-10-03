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
  }

  useEffect(() => {
    FetchList()
    setTodos(list.todos)
    console.log(list.todos)

  }, [])

  // for (let i = 0; i < list.todos.length; i++) {
  //   ;<p>{list.todos[i].titel}</p>
  // }

  return (
    <>
      <div>{!list ? "List not found" : list.titel}</div>
      <p>{!list.todos ? "todos not found" : "hittad"}</p>
      {/* <ul>
        {todos.length > 0
          ? "Todos not found"
          : todos.map((item) => (
              <li>
                {item.titel} {item.createdAt} <button>DELETE</button>
                <button>UPDATE</button>
              </li>
            ))}
      </ul> */}
      <CreateTodo />
    </>
  )
}

//TODO när fetchningen fungerar igen så fixa post req i CreateTodo.js
