import React from "react";
import Bloglist from "./Bloglist";
import Navbar from "./Navbar";
import Home from "./Homepage";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Errorpages from "./Error";





function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />
             <div className="content">
               <Switch>
                 <Route exact path="/" >
                   <Home />
                 </Route>
                 <Route path="/create">
                   <Create />
                 </Route>
                 <Route path="/blogs/:id">
                   <BlogDetails />
                 </Route>
                 <Route path="*">
                   <Errorpages />
                 </Route>
               </Switch>
             </div>
      </div>
      </Router>
  )
}

export default App;
 