import React, { useState, useEffect } from "react"
import AllListPage from "../pages/AllListPage"

export default function GetAllLists() {
  const [allLists, setAllLists] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch("http://localhost:4000/")
    const data = await response.json()

    setAllLists(data)
    //console.log(allLists)
  }

  return (
    <div>
      {allLists}
    </div>
  )
}

// {JSON.stringify(allLists)}