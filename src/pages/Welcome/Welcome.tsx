import React from "react";
import { BigHeader } from "../../components/BigHeader/BigHeader";
import { BioImage } from "../../components/BioImage/BioImage";
import { BioText } from "../../components/BioText/BioText";
import { IconGridMERN } from "../../components/IconGrids/IconGridMERN";
import { IconGridTools } from "../../components/IconGrids/IconGridTools";

export const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <BigHeader class="welcomeHeader" text="Welcome. My name is Jamey." />
      <BioImage />
      <BioText
        class="bioText1"
        text="I am a full-stack web developer that primarily works creating MERN stack
        applications."
      />
      <IconGridMERN />
      <BioText
        class="bioText2"
        text="However, I love adding new tools to my toolbelt. Here are a few others I particularly enjoy:"
      />
      <IconGridTools />
    </div>
  );
};
