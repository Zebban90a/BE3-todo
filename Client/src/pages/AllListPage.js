import React, { useState, useEffect } from "react"
import axios from 'axios'

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
        <div>{item.titel}</div>
      ))}
    </div>
    </>
  )
}
