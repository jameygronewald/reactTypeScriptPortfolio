import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { FeaturedProject1 } from "../../components/FeaturedProjects/FeaturedProject1";
import { FeaturedProject2 } from "../../components/FeaturedProjects/FeaturedProject2";

export const Projects = () => {
  return (
    <div className="projectsContainer">
      <BigHeader class="projectsHeader" text="Here are some things I've been working on." />
      <FeaturedProject1 />
      <FeaturedProject2 />
    </div>
  );
};
