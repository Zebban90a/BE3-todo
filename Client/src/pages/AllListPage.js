import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import CreateList from "../components/CreateList"

export default function AllListPage({}) {
  const [allLists, setAllLists] = useState([])
  const { userId } = useParams()

  async function FetchAllLists() {
    const { data } = await axios.get(`http://localhost:4000/api/todo`)
    setAllLists(data)
  }

  let deleteList = (id) => {
    axios.delete(`http://localhost:4000/api/todo/${id}`)
    window.location.reload()
  }

  useEffect(() => {
    FetchAllLists()
  }, [])

  return (
    <>
      <div>
      <CreateList userId={userId} />
        <ul>
          {allLists.map((item, index) => (
            <li key={index}>
              <Link to={`/todolist/${item._id}`}>{item.titel} </Link>
              <button onClick={() => deleteList(item._id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
