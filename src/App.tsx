import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
};

export default App;
