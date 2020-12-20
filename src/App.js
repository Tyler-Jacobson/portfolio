import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Project} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
