import React from "react";
import { Link } from "react-router-dom";

export const NavLink = (props: { name: string; pathName: string }) => {
  return (
    <Link to={props.pathName} className="navLink">
      {props.name}
    </Link>
  );
};
