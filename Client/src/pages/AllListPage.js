import React, { useState, useEffect } from "react"
import axios from 'axios'
import {Link } from 'react-router-dom'


export default function AllListPage( ) {
  const [allLists, setAllLists] = useState([])

  async function FetchAllLists() {
    const { data } = await axios.get('http://localhost:4000/')
    setAllLists(data)
  }

  useEffect(() => {
    FetchAllLists()
  }, [])
  

 
  return (
    <> 
    <div>
    {allLists.map((item) => (
        <div><Link to= {`/todolist/${item._id}`}>{item.titel} </Link></div>
      ))}
    </div>
    </>
  )
}
