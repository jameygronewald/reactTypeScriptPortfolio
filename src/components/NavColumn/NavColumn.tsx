import React from "react";
import { NavLink } from "../NavLink/NavLink";

export const NavColumn = () => {
  return (
    <>
      <NavLink name="Home" pathName="" />
      <NavLink name="Projects" pathName="projects" />
      <NavLink name="Contact" pathName="contact" />
    </>
  );
};
