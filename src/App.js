import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Project from "./Components/Project";

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
