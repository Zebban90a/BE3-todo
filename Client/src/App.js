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
          
          <Route path="/register" exact component={Register} />
          <Route path="/todolists" exact component={AllListPage} />
          <Route path="/todolists/:listId" exact component={ListPage} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App

//NOTE behövs Todo.jsx i comonents mappen?
//NOTE UpdateTodo i pages mappen behövs inte?