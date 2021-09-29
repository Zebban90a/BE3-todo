import React, { useState, useEffect } from "react"
import axios from "axios"

export default function GetAllLists() {
  const url = "https://locaalhost:4000/"
  const [allLists, setAllLists] = useState([])

  useEffect(() => {
    let lists = axios.get(url)
    setAllLists(lists)
  }, [])

  console.log(lists)

  return <div></div>
}
