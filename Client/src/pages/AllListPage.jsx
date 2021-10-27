import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import CreateList from "../components/CreateList"
import { Header } from "../components/Header"
import trashCan from "../img/trashcan.png"
import styled from "styled-components"

const StyledTrashcan = styled.image`
  cursor: pointer;
  margin-left: 0.1rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const StyledUl = styled.ul`
  list-style: none;
`

const StyledLI = styled.li`
  margin-top: 0.5rem;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default function AllListPage() {
  const [allLists, setAllLists] = useState([])
  const { userId } = useParams()
  console.log(userId)

  async function FetchAllLists() {
    const { data } = await axios.get(`http://localhost:4000/api/todo/`)
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
      <Header />
      <div>
        <CreateList userId={userId} />
        <StyledUl>
          {allLists.map((item, index) => (
            <StyledLI key={index}>
              <Link to={`/${item._id}`}>{item.titel} </Link>
              {/* <button onClick={() => deleteList(item._id)}> */}
              <StyledTrashcan onClick={() => deleteList(item._id)}>
                <img src={trashCan} alt="" />
              </StyledTrashcan>
              {/* </button> */}
            </StyledLI>
          ))}
        </StyledUl>
      </div>
    </>
  )
}
