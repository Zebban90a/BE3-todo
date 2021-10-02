import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import PostForm from "./components/PostForm"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage";
//import AllListsPage from "./pages/AllListPage"

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path='/todolist/:id'>
        <ListPage />
       </Route> 
      <Route path='/' >
      <AllListPage />
      <PostForm />
      </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
