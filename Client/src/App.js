import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage"
import UpdateTodo from "./pages/UpdateTodo"
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
          <Route path="/todolist/:listId/todo/:todoId">
            <UpdateTodo />
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
