import React, { useState, useEffect } from "react"
//import AllListPage from "../pages/AllListPage"
import {getallLists} from "../fetches/fetches"

export default function GetAllLists() {
  const [allLists, setAllLists] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await getallLists()
    const data = await res.json()

    setAllLists(data)
  }

  return (
    <div>
      {allLists}
    </div>
  )
}

