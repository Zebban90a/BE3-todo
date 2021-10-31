import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/:listId">
            <ListPage />
          </Route>
          <Route path="/">
            <AllListPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

//NOTE behövs Todo.jsx i comonents mappen?
//NOTE UpdateTodo i pages mappen behövs inte?