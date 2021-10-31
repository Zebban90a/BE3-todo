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
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/:listId" exact component={ListPage} />
          <Route path="/" exact component={AllListPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App

//NOTE behövs Todo.jsx i comonents mappen?
//NOTE UpdateTodo i pages mappen behövs inte?