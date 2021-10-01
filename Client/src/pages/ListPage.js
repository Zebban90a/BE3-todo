import React, { useState, useEffect } from "react"
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'


export default function ListPage( ) {

  const [list, setList] = useState([])
  const { id } = useParams()

  async function FetchList() {
    const { data } = await axios.get(`http://localhost:4000/todolist/${id}`)
    setList(data)
  }

  useEffect(() => {
    FetchList()
  }, [])
  
  
 
  return (
    <> 
    <div>
        {list.length > 0 ? 'List not found' : list.titel  }
    </div>
    {list.todos.map((item) => (
        <div>{item} </div>
      ))}
    </>
  )
}
