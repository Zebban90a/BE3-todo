import React, { useState, useEffect } from "react"
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'


export default function ListPage( ) {

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
  }, [])
  
  
  return (
    <> 
    <div>
        {list.length > 0 ? 'List not found' : list.titel  }
    
    </div>
    <ul>
      
    {todos.length > 0 ? 'Todos not found' : 
    todos.map((item) => (
        <li>{item.titel} {item.createdAt} <button>DELETE</button><button>UPDATE</button></li>
    ))}
    </ul>
    </>
  )
}
