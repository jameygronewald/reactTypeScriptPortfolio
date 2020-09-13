import React from "react";
import { Link } from "react-router-dom";
import { NavLinkProps } from "../../utils/interfaces";

export const NavLink: React.FC<NavLinkProps> = (props: NavLinkProps): JSX.Element => {
  return (
    <div className="navRow">
      <Link to={props.pathName} className="navLink">
        {props.name}
      </Link>
    </div>
  );
};
