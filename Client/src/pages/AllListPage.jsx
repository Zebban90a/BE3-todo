import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import CreateList from "../components/CreateList"
import { Header } from "../components/Header"
import TrashCan from "../img/trashcan.png"
import styled from "styled-components"
import {getAllLists} from "../fetches/fetches"

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
const history = useHistory()

  async function FetchAllLists() {
    const token = window.localStorage.getItem("token")

    const {data} = await getAllLists(token)
    setAllLists(data)
    console.log(`Alla listor ${data}`)
  }

  let deleteList = (id) => {
    axios.delete(`http://localhost:4000/api/todo/${id}`)
    history.push("/todolists")
    //window.location.reload()
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
              <Link to={`/todolists/${item._id}`}>{item.titel} </Link>
              <StyledTrashcan onClick={() => deleteList(item._id)}>
                <img src={TrashCan} alt="trashcan" />
              </StyledTrashcan>
            </StyledLI>
          ))}
        </StyledUl>
      </div>
    </>
  )
}
