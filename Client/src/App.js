import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import AllLists from "./components/GetAllLists"
import PostForm from "./components/PostForm"
import AllListPage from "./pages/AllListPage"
import ListPage from "./pages/ListPage";
//import AllListsPage from "./pages/AllListPage"

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path='/todo/:id'>
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
