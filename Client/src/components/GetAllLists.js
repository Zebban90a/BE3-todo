import React, { useState, useEffect } from "react"

export default function GetAllLists() {
  const url = "https://localhost:4000/"
  const [allLists, setAllLists] = useState(null)
  

  useEffect(() => {
    // getLists()
    // async function getLists() {
    //   let response = await fetch("https://localhost:4000")
    //   response = await response.json()
    //   setAllLists(response)
    // }

    getData()


    async function getData() {
      const response = await fetch("http://localhost:4000/")
      const data = await response.json()


      setAllLists(data)
    }
  }, [])

  console.log(allLists)

  return <div>{JSON.stringify(allLists)}</div>
}
