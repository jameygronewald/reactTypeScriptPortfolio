import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { NavColumn } from "./components/NavColumn/NavColumn";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <div className="navColumn">
          <NavColumn />
        </div>
        <div className="mainColumn">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
