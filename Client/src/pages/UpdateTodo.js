import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function UpdateTodo() {
    const [todo, setTodo]= useState([])
    const { todoId, listId } = useParams()

    async function FetchTodo() {
        const { data } = await axios.get(`http://localhost:4000/todolist/${listId}/todo/${todoId}`)
        setTodo(data)
    }

    useEffect(() => {
        FetchTodo()
    }, [])

    return (
        <div>
            <h1>{!todo ? "Todo not found" : todo.body}</h1>
        </div>
    )
}