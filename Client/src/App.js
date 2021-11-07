import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: rgb(42,43,239);
    background: linear-gradient(90deg, rgba(42,43,239,1) 6%, rgba(233,179,244,1) 100%);

  }
`

function App() {

  return (
    <>
      <GlobalStyle />
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
