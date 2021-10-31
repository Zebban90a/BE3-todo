import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const token = window.localStorage.getItem("token")
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkIfLoggedIn () {
    if(token) {
      return setIsLoggedIn(true);
    } else {
      return history.push('/login')
    }
  }

  useEffect(() => {
    console.log('hallolhll')
    checkIfLoggedIn()
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register} />
          {isLoggedIn && <Route path="/:listId" exact component ={ListPage} /> }
          {isLoggedIn && <Route path="/" exact component = {AllListPage} /> }
        </Switch>
      </Router>
    </>
  )
}

export default App

//NOTE behövs Todo.jsx i comonents mappen?
//NOTE UpdateTodo i pages mappen behövs inte?