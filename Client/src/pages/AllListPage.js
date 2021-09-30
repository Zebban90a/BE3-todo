import React, { useState, useEffect } from "react"

export default function AllListPage({ lists }) {
  const [allLists, setAllLists] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch("http://localhost:4000/")
    const data = await response.json()

    setAllLists(data)
    console.log(allLists)
  }

  return (
    <>
      <div>
        <button onClick={getData}>GET DATA</button>
        {allLists.lenght > 0 ? <p>{allLists}</p> : <p>Loding lists...</p>}
      </div>
    </>
  )
}
