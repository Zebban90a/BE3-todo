import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage"
import CreateList from "./components/CreateList"
import UpdateTodo from "./pages/UpdateTodo"
//import AllListsPage from "./pages/AllListPage"

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/todolist/:listId/todo/:todoId">
            <UpdateTodo />
          </Route>
          <Route path="/todolist/:id">
            <ListPage />
          </Route>
          <Route path="/">
            <AllListPage />
            <CreateList />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
