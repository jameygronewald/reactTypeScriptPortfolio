import React from "react";
import { NavLink } from "../NavLink/NavLink";

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <>
      <NavLink name="Welcome" pathName="welcome" />
      <NavLink name="Projects" pathName="projects" />
      <NavLink name="Contact" pathName="contact" />
    </>
  );
};
