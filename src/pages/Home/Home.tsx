import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { BioImage } from "../../components/BioImage/BioImage";
import { BioText } from "../../components/BioText/BioText";
import { IconGridMERN } from "../../components/IconGrids/IconGridMERN";

export const Home = () => {
  return (
    <div className="homeContainer">
      <BigHeader text="Welcome. My name is Jamey." />
      <BioImage />
      <BioText text="I am a full-stack web developer that primarily works creating MERN stack
        applications."/>
      <IconGridMERN />
    </div>
  );
};
