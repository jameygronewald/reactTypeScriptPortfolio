import React from "react";
import { Link } from "react-router-dom";

export const NavColumn = () => {
  return (
    <>
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/projects" className="navLink">
        Projects
      </Link>
      <Link to="/contact" className="navLink">
        Contact
      </Link>
    </>
  );
};
