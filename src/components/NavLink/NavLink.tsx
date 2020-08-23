import React from "react";
import { Link } from "react-router-dom";

export const NavLink = (props: { name: string; pathName: string }) => {
  return (
    <div className="navRow">
      <Link to={props.pathName} className="navLink">
        {props.name}
      </Link>
    </div>
  );
};
