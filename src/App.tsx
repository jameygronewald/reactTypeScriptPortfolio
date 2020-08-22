import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { NavColumn } from "./components/NavColumn/NavColumn";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="navColumn">
        <NavColumn />
      </div>
      <div className="mainColumn">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Router>
      </div>
    </div>
  );
};

export default App;
