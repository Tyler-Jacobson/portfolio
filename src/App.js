import React from "react"
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import Nav from "./Nav"
import Home from "./Home"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
