import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CreateList from "../components/CreateList"
import { Header } from "../components/Header"
import TrashCan from "../img/trashcan.png"
import styled from "styled-components"
import {getAllLists, deleteList} from "../fetches/fetches"

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
  margin-left: 10rem;
  color: white;
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

  async function FetchAllLists() {
    const token = window.localStorage.getItem("token")

    const {data} = await getAllLists(token)
    setAllLists(data)
    console.log(`Alla listor ${data}`)
  }

  let deleteTodoList = (id) => {
    deleteList(id)
   // window.location.reload()
  }

  useEffect(() => {
    FetchAllLists()
  }, [allLists])

  return (
    <>
      <Header />
      <div>
        <CreateList userId={userId} />
        <StyledUl>
          {allLists.map((item, index) => (
            <StyledLI key={index}>
              <Link to={`/todolists/${item._id}`}>{item.titel} </Link>
              <StyledTrashcan onClick={() => deleteTodoList(item._id)}>
                <img src={TrashCan} alt="trashcan" />
              </StyledTrashcan>
            </StyledLI>
          ))}
        </StyledUl>
      </div>
    </>
  )
}
