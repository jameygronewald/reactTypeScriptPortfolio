import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { FeaturedProject } from "../../components/FeaturedProject/FeaturedProject";

export const Projects = () => {
  return (
    <div className="projectsContainer">
      <BigHeader class="projectsHeader" text="Here are some things I've been working on." />
      <FeaturedProject />
    </div>
  );
};
