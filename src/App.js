import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Nav from "./Nav";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Project} />
        </Switch>
    </div>
  );
}

export default App;
